// *********************************************************************************
// post-signup.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.post("/api/signup", function(req, res) {
    // get form values from req.body
    db.fknUsers.create(req.body).then(function(fknUsers) {
      // add to db.fkntodolist_users table

      // return user ID
      res.json(fknUsers.id);

      // redirect to home
    });
  });
};
// POST route for saving a new post
app.post("/api/posts", function(req, res) {
  db.fkntodolist_users.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
});