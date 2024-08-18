const express = require("express");
const app = express();
const home = require("./routes/initial-routes/home");
const profile = require("./routes/initial-routes/profile");
const community = require("./routes/initial-routes/community");
const creator = require("./routes/initial-routes/creator");
const createPost = require("./routes/initial-routes/createPost");
const managePost = require("./routes/initial-routes/managePost");
const showPost = require("./routes/initial-routes/showPost");
const login = require("./routes/auth/login");
const logout = require("./routes/auth/logout");
const register = require("./routes/auth/register");
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// initial - routes
app.get("/home", home);
app.get("/profile", profile);
app.get("/community", community);
app.get("/creator", creator);
app.get("/create", createPost);
app.get("/manage_posts", managePost);
app.get("/post/:id", showPost);

//.env setup
require("dotenv").config();

//authentication-related-routes
app.get("/login", login);
app.get("/logout", logout);
app.get("/register", register);

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
