var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
  console.log("title", title);
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
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
  let contactName = req.body.fname;
  console.log("test", req.body);
  console.log("testing", contactName);
  res.redirect("/home");
});

module.exports = router;
