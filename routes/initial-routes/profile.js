require("dotenv").config();
let jwt = require("jsonwebtoken");
let userModel = require("../../models/user");

const profile = async (req, res) => {
  let token = req.cookies.token;
  let userData = jwt.verify(token, process.env.JWT_SECRET);
  let user = await userModel.findOne({ _id: userData.id });

  res.render("profile", { user });
};

module.exports = profile;
