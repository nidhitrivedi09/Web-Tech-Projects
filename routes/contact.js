let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// connect to our contact Model
let Contact = require("../models/contact");

/* GET Route for the contact List page - READ OPeration */
router.get("/", (req, res, next) => {
  Contact.find((err, ContactList) => {
    if (err) {
      return console.log(err);
    } else {
      res.render("contact", {
        title: "Business Contacts",
        ContactList:ContactList,
    });
  }
  });
});

module.exports = router;

