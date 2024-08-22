const postModel = require("../../models/post");
const userModel = require("../../models/user");

const editPost = async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id });
 
  res.render("editPost", { post });
};
module.exports = editPost;
