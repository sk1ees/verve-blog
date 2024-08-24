require("dotenv").config();
const jwt = require("jsonwebtoken");
let userModel = require("../models/user");
const isLoggedIn = async (req, res, next) => {
  let token = req.cookies.token;
  if (token && token != "") {
    let userData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userData;
    let currentUser = await userModel.findOne({ _id: userData.id });
    res.locals.profileUser = currentUser;

    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = isLoggedIn;
