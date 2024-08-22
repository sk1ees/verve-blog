const userModel = require("../../models/user");

const creatorPost = async (req, res) => {
  const user = await userModel
    .findOne({ name: req.params.name })
    .populate("post");

  //   console.log(user);
  res.render("creatorPost", { user });
};

module.exports = creatorPost;
