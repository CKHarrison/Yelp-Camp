var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Clouds Rest",
            image: "https://images.unsplash.com/photo-1503797105139-388b1b80256d?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Lake Lakey",
            image: "https://images.unsplash.com/photo-1502993100359-6e0cee23764d?auto=format&fit=crop&w=881&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Camp Spacey",
            image: "https://images.unsplash.com/photo-1503797105139-388b1b80256d?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
        // add a few campgrounds
        data.forEach(function(seed){
           Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err);
               } else {
                   console.log("Added a campground");
                   //create a comment
                   Comment.create({
                       text: "This place is great, but I wish there was internet",
                       author: "Homer"
                       }, function(err, comment){
                           if(err){
                               console.log(err);
                           } else {
                            campground.comments.push(comment);
                            campground.save();   
                            console.log("Created new comment");
                           }
                       });
               }
           });
        });
    });
    // add a few comments
}


module.exports = seedDB;