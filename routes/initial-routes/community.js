const postModel = require("../../models/post");

const community = async (req, res) => {
  let post = await postModel.find().populate("user");
  // console.log(post);
  res.render("community", { post });
};

module.exports = community;
