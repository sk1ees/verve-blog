const userModel = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const postLogin = async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.send("something went wrong");

  bcrypt.compare(password, user.password, (err, results) => {
    if (results) {
      let token = jwt.sign({ email, id: user._id }, "secret");
      res.cookie("token", token);

      res.redirect("/home");
    } else {
      res.send("something went wrong");
    }
  });
};
module.exports = postLogin;
