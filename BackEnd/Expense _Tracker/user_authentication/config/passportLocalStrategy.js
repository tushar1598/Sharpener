const User = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "Email", // Field name for the username in your form
      // passwordField: "Password", // Field name for the password in your form
    },
    function (email, password, done) {
      try {
        User.findOne({ where: { Email: email } }).then((user) => {
          if (!user) {
            return done(null, false, { message: "User not found" });
          }

          if (user.dataValues.Password !== password) {
            return done(null, false, { message: "Incorrect password" });
          }

          return done(null, user);
        });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  try {
    User.findOne({ where: { id: id } }).then((user) => {
      done(null, user);
    });
  } catch (error) {
    done(error);
  }
});
