const userModel = require("../../models/user");

const managePost = async (req, res) => {
  const user = await userModel.findOne({ _id: req.user.id }).populate("post");

  res.render("managePost", { user });
};

module.exports = managePost;
