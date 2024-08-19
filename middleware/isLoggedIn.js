const isLoggedIn = (req, res, next) => {
  let token = req.cookies.token;
  if (token && token != "") {
    next();
    
  } else {
    res.redirect("/login");
  }
};

module.exports = isLoggedIn;
