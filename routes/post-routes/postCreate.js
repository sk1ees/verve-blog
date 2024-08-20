const postModel = require("../../models/post");
const userModel = require("../../models/user");

const createPost = async (req, res) => {
  let { path } = req.file;
  let { heading, desc } = req.body;
  
  // console.log({ body: req.body, file: req.file });
  let user = await userModel.findOne({ email: req.user.email });
  let post = await postModel.create({
    heading,
    banner: path,
    desc,
    user: user._id,
  });

  user.post.push(post.id);
  await user.save();
  res.redirect("/home");
};
module.exports = createPost;
