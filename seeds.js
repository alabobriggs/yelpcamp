var mongoose = require("mongoose"),
    campground = require("./models/campground");
    comment = require("./models/comment");

var data = [
    {
        name: "magnum",
        image: "https://images.unsplash.com/photo-1531904796324-bcfd734e57f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2996cb13acadb7441ac2ae60f65cb139&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "falicio menedes",
        image: "https://images.unsplash.com/photo-1531904796324-bcfd734e57f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2996cb13acadb7441ac2ae60f65cb139&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "pavillion",
        image: "https://images.unsplash.com/photo-1531904796324-bcfd734e57f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2996cb13acadb7441ac2ae60f65cb139&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "iPoint",
        image: "https://images.unsplash.com/photo-1531904796324-bcfd734e57f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2996cb13acadb7441ac2ae60f65cb139&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]
function seedDB(){
    campground.remove({}, function (err) {
        // if (err) {
        //     console.log(err);
        // } else {
        //     console.log("campgrounds removed");
        //     data.forEach(function (seed) {
        //         campground.create(seed, function (err, campground) {
        //             if (err) {
        //                 console.log(err)
        //             } else {
        //                 console.log("new campground added");
        //                 comment.create(
        //                     {
        //                         text: "this place need Jesus and internet",
        //                         authur : "Alabo"
        //                     }, function (err, comment) {
        //                         if (err) {
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("created new comment");
        //                         } 
        //                     }
        //                 );
        //             }
        //         });
        //     });
        // }
    });
}
    
module.exports = seedDB;