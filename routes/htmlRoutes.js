var db = require("../models");
var path = require("path")

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {

    res.render("home");

  });

  app.get("/movies", function (req, res) {

    res.render("moviesLink");

  });

  app.get("/music", function (req, res) {

    res.render("musicLink");

  });

  app.get("/books", function (req, res) {

    res.render("booksLink");

  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    //if (req.user) {
    res.render("login");
    //}
    //res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/register", function (req, res) {

    res.render("register");

  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });


  app.get("/movie/:id", function (req, res) {
    let title = req.params.title.split(" ").join("")

         console.log(title);
    db.movies.findOne({
      where: {
        title: { [Op.like]: "%" + movie + "%"}
      }
    }).then(function (movie) {
      console.log(movie.dataValues)
      db.discussion.findAll({
        where: {
          art_id: movie.dataValues.id,
          art_category: "Movies"
        }
      }).then(function (comments) {
        res.render("comment", {
          content: movie.dataValues,
          comments: comments
        })
      })
    })
  })

  app.get("/music/:id", function (req, res) {
    db.music.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (music) {
      db.discussion.findAll({
        where: {
          art_id: req.params.id,
          art_category: "Music"
        }
      }).then(function (comments) {
        res.render("comments", {
          content: music.dataValues,
          comments: comments
        })
      })
    })
  })

  app.get("/tv/:id", function (req, res) {
    db.tv.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (tv) {
      db.discussion.findAll({
        where: {
          art_id: req.params.id,
          art_category: "TV"
        }
      }).then(function (comments) {
        res.render("comments", {
          content: tv.dataValues,
          comments: comments
        })
      })
    })
  })

};
