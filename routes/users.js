const express = require("express");
const router = express.Router();
const passport = require("passport");
const { ensureAuthenticated } = require("../config/authenticate");

// Login post handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/business-contacts",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
});

// Logout handle
router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
