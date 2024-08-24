const postModel = require("../../models/post");
const { timeAgo } = require("../../utils/dateHelper");
const community = async (req, res) => {
  let post = await postModel.find().populate("user");

  res.render("community", { post, timeAgo });
};

module.exports = community;
