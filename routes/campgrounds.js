var express = require('express'),
    router = express.Router(),
    campground = require("../models/campground"),
    comment = require("../models/comment"),
    middleware = require("../middleware");


router.get('/', (req, res) => {
    // console.log(req.user);
    campground.find({}, function (err, newcampground) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {
                campgrounds: newcampground,
                currentUser: req.user
            });
        }
    });
});

// create
router.post('/', middleware.isLoggedIn , (req, res) => {
    var name          = req.body.name,
        image         = req.body.image,
        authur        = {
                        id: req.user._id,
                        username: req.user.username
        },
        description   = req.body.description,
        newcampground = {
                        name: name,
                        image: image,
                        description: description,
                        authur: authur
        };
    campground.create(newcampground, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    });
});

router.get('/new', middleware.isLoggedIn , (req, res) => {
    res.render('new');
});

// show campgrounds by id 

router.get('/:id', (req, res) => {
    campground.findById(req.params.id).populate("comments").exec(function (err, foundcampground) {
        if (err) {
            console.log();
        } else {
            // console.log(foundcampground)
            res.render('show', {
                campground: foundcampground
            });

        }
    });
});

// edit campground route

router.get('/:id/edit', middleware.checkownership , (req, res) => {
        campground.findById(req.params.id, function (err, campground) {
        res.render('edit', {campground: campground});
               
});
});
// update campground route
router.put('/:id', middleware.checkownership, (req, res) => {
    campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, campground) {
        if (err) {
            res.redirect("/campgrounds/:id");
        } else {
            res.redirect('/campgrounds/' + req.params.id);
        }
    })
});

// delete route

router.delete('/:id' , middleware.checkownership , (req, res) => {
    campground.findByIdAndRemove(req.params.id, function (err, blog) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect('/campgrounds');
        }
    })
});

module.exports = router;