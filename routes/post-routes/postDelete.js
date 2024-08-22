const postModel = require("../../models/post");
const userModel = require("../../models/user");

const postDelete = async (req, res) => {
  let post = await postModel.findOneAndDelete({ _id: req.params.id });
  await userModel.updateOne(
    { _id: req.user.id },
    { $pull: { post: req.params.id } }
  );
  res.redirect("/manage-posts");
};
module.exports = postDelete;
