const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profileImage: String,
  tags: Object,
});

module.exports = mongoose.model("user", userSchema);
