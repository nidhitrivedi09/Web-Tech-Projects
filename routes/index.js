var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", firstName: "",  lastName: ""});
  console.log("title", title);
});

router.get("/home", function (req, res, next) {

  res.render("index", { title: "Home", firstName: "",  lastName: "" });
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

  console.log("test", req.body);

  res.render('index', { title: "Home", firstName: fname, lastName: lname});
});

module.exports = router;
