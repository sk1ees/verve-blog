const userModel = require("../../models/user");
const bcrypt = require("bcrypt");

const postRegister = async (req, res) => {
  let { name, email, password, Gaming, Movies, Sports, Fashion } = req.body;
  let { path } = req.file;
  // console.log({ body: req.body, file: req.file });
  let findUser = await userModel.findOne({ email });
  if (findUser) return res.send("user already exists");
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        name,
        email,
        password: hash,
        profileImage: path,
        tags: { Gaming, Movies, Sports, Fashion },
      });
      // console.log(user);
    });
  });

  res.redirect("/login");
};
module.exports = postRegister;
