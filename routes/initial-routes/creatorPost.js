const userModel = require("../../models/user");
const { timeAgo } = require("../../utils/dateHelper");
const creatorPost = async (req, res) => {
  const user = await userModel
    .findOne({ name: req.params.name })
    .populate("post");

  //   console.log(user);
  res.render("creatorPost", { user, timeAgo });
};

module.exports = creatorPost;
