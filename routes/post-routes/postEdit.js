const postModel = require("../../models/post");

const PostEdit = async (req, res) => {
  let { path } = req.file;
  let { heading, desc } = req.body;

  await postModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      heading,
      desc,
      banner: path,
    },
    { new: true }
  );

  res.redirect("/manage-posts");
};
module.exports = PostEdit;
