let mongoose = require("mongoose");

// create a model class of users
let userModel = mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userModel);
