var express = require('express'),
    router = express.Router({mergeParams : true}),
    campground = require("../models/campground"),
    comment = require("../models/comment"),
    middleware = require("../middleware");


// vew comment
router.get('/new', middleware.isLoggedIn, (req, res) => {
    campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log();
        } else {
            res.render("comments", {
                campground: campground
            });
        }
    })
});

// create comment
router.post('/', middleware.isLoggedIn, (req, res) => {
    campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log();
            res.redirect('/campgrounds');
        } else {
            comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    comment.authur.id = req.user._id;
                    comment.authur.username = req.user.username;
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
});

// edit comment
router.get('/:comment_id/edit', middleware.checkcommentownership, (req, res) => {
    comment.findById(req.params.comment_id , function (err , foundcomment) {
       if (err) {
            res.redirect('back');   
       } else {
        res.render("editComment" , { campground_id : req.params.id , comment : foundcomment});
       }
    });
});

// update comment route

router.put('/:comment_id', middleware.checkcommentownership, (req, res) => {
     comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function (err, updatedComment) {
         if (err) {
             res.redirect("back");
         } else {
             res.redirect("/campgrounds/" + req.params.id);
         }
     });
});

// delete comment route

router.delete("/:comment_id", middleware.checkcommentownership , function (req, res) {
    //findByIdAndRemove
    comment.findByIdAndRemove(req.params.comment_id, function (err) {
        if (err) {
            res.redirect("back");
        } else {
            // req.flash("success", "Comment deleted");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});


module.exports = router;