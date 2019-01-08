var express = require('express'),
    router = express.Router(),
    passport = require("passport"),
    user = require("../models/user");


// root route
router.get('/', (req, res) => {
    res.render('home');
});


// =================================
// auth Routes
// =================================

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    req.body.username
    req.body.password
    var newUser = new user({
        username: req.body.username
    });
    user.register(newUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err)
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect('/campgrounds');
        });
    });
});

// login route

router.get('/login', (req, res) => {
    res.render("login");
});

router.post('/login', passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), (req, res) => {

});

//  logout

router.get('/logout', (req, res) => {
    req.logOut();
    req.flash("success", "logged you out");
    res.redirect('/campgrounds');
});

//  middle man


module.exports = router;