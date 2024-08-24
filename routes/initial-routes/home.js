const postModel = require("../../models/post");
const { timeAgo } = require("../../utils/dateHelper");
const home = async (req, res) => {
  // Find the most recent post
  const post = await postModel
    .find()
    .populate("user")
    .sort({ createdAt: -1 })
    .limit(1);
  const fourRecentPost = await postModel
    .find()
    .populate("user")
    .skip(1)
    .sort({ createdAt: -1 }) // Sort by most recent first
    .limit(4); // Limit to the top 4 posts

  // Check if a post is found
  if (post.length > 0) {
    // console.log(post);
    res.render("home", { post, timeAgo, fourRecentPost }); // Send the most recent post as a JSON response
  } else {
    res.status(404).send("No posts found.");
  }
};

module.exports = home;
