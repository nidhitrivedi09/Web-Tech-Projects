let express = require("express");
let router = express.Router();
let Contact = require("../models/contact");
let { ensureAuthenticated } = require("../config/authenticate");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home",
    firstName: "",
    lastName: "",
    mail: "",
    contactNumber: "",
    message: "",
  });
  console.log("title", title);
});

router.get("/home", function (req, res, next) {
  res.render("index", {
    title: "Home",
    firstName: "",
    lastName: "",
    mail: "",
    contactNumber: "",
    message: "",
  });
});

/* GET About Us page. */
router.get("/about", function (req, res, next) {
  res.render("About", { title: "About" });
});

/* GET Projects page. */
router.get("/projects", function (req, res, next) {
  res.render("Projects", { title: "Projects" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("Services", { title: "Services" });
});

/* GET Contact Us page. */
router.get("/contact", function (req, res, next) {
  res.render("Contact", { title: "Contact" });
});

/*POST Contact Us page. */
router.post("/contact", function (req, res, next) {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let email = req.body.email;
  let contactnumber = req.body.contactnumber;
  let Message = req.body.Message;

  console.log("test", req.body);
  console.log(email);
  res.render("index", {
    title: "Home",
    firstName: fname,
    lastName: lname,
    mail: email,
    contactNumber: contactnumber,
    message: Message,
  });
});

/* GET Business contacts page. */
router.get("/business-contacts", (req, res, next) => {
  Contact.find({})
    .sort("contactName")
    .exec(function (err, ContactList) {
      if (err) {
        return console.log(err);
      } else {
        res.render("contacts", {
          title: "Business Contacts",
          ContactList: ContactList,
        });
      }
    });
});
/* GET Business contact Add page. */
router.get("/business-contacts/add/", (req, res, next) => {
  //show the add view
  res.render("add", {
    title: "Add Contact",
  });
});

/* GET Business contact Edit page. */
router.get("/business-contacts/edit/:id", (req, res, next) => {
  let id = req.params.id;

  Contact.findById(id, (err, ContactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("edit", {
        title: "Edit Contact",
        contact: ContactToEdit,
      });
    }
  });
});

/* POST Business contacts page. create operation*/
router.post("/business-contacts/add", (req, res, next) => {
  console.log("Add entered");

  let newContact = Contact({
    username: req.user.username,
    name: req.body.name,
    contactName: req.body.contactName,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    organisationName: req.body.organisationName,
  });

  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the Business Contacts List
      req.flash("Add", "Contact added Successfully");
      res.redirect("/business-contacts");
    }
  });
});

/* POST Business contacts page. update operation*/
router.post("/business-contacts/edit/:id", (req, res, next) => {
  console.log("update entered");

  let id = req.params.id;
  console.log(id);
  let updateContact = Contact({
    _id: req.params.id,
    username: req.user.username,
    name: req.body.name,
    contactName: req.body.contactName,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    organisationName: req.body.organisationName,
  });
  Contact.updateOne({ _id: id }, updateContact, (err) => {
    console.log("test loop", id);
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      console.log("success");
      // refresh the Business Contacts List
      req.flash("Edit", "Contact updated Successfully");
      res.redirect("/business-contacts");
    }
  });
});

/* DELETE Business contact delete operation. */
router.get("/business-contacts/delete/:id", (req, res, next) => {
  console.log("delete entered");
  let id = req.params.id;
  Contact.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the Business Contacts List
      req.flash("Delete", "Contact deleted Successfully");
      res.redirect("/business-contacts");
    }
  });
});

/* GET Login page. */
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login" });
});

/* Handle logout page. */
router.get("/logout", function (req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
