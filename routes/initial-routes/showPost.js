const postModel = require("../../models/post");

const showPost = async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id });

  res.render("showPost", { post });
};

module.exports = showPost;
