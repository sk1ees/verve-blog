require("dotenv").config();
const userModel = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const postLogin = async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.render("error");

  bcrypt.compare(password, user.password, (err, results) => {
    if (results) {
      let token = jwt.sign({ email, id: user._id }, process.env.JWT_SECRET);
      res.cookie("token", token);

      res.redirect("/home");
    } else {
      res.render("error");
    }
  });
};
module.exports = postLogin;
