var campground = require("../models/campground"),
    comment = require("../models/comment");

// all middle ware goes here
var middlewareObj = {};

// campground middleware
middlewareObj.checkownership = function(req, res, next) {
        if (req.isAuthenticated()) {
            campground.findById(req.params.id, function (err, campground) {
                if (err) {
                    res.redirect('back');
                } else {
                    if (campground.authur.id.equals(req.user._id)) {
                        next();
                    } else {
                        res.redirect('back');
                    }
                }
            });
        } else {
            res.redirect('back');
        }
};

// comment middleware
middlewareObj.checkcommentownership = function(req, res, next) {
    if (req.isAuthenticated()) {
        comment.findById(req.params.comment_id, function (err, foundcampground) {
            if (err) {
                res.redirect('back');
            } else {
                // does user own comment
                if (foundcampground.authur.id.equals(req.user._id)) {
                    next();
                } else {
                    res.redirect('back');
                }
            }
        });
    } else {
        res.redirect('back');
    }
};

// general middleware
middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else
        req.flash("error", "you need to be logged in to do that");
        res.redirect('/login');
};


module.exports = middlewareObj;