const postLogout = async (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
};
module.exports = postLogout;
