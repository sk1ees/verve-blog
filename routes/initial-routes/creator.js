require("dotenv").config();

let userModel = require("../../models/user");
let jwt = require("jsonwebtoken");

const creator = async (req, res) => {
  let token = req.cookies.token;
  let userData = jwt.verify(token, process.env.JWT_SECRET);
  let user = await userModel.find();
  let currentUser = await userModel.findOne({ _id: userData.id });
  // console.log(user);
  res.render("creators", { user, currentUser });
};

module.exports = creator;
