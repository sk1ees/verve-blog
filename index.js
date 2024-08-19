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

const register = require("./routes/auth/register");
const path = require("path");
const db = require("./middleware/db");
const isLoggedIn = require("./middleware/isLoggedIn");
const postRegister = require("./routes/post-routes/postRegister");
const postLogin = require("./routes/post-routes/postLogin");
const cookieParser = require("cookie-parser");
const postLogout = require("./routes/post-routes/postLogout");
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// initial - routes
app.get("/home", isLoggedIn, home);
app.get("/profile", isLoggedIn, profile);
app.get("/community", isLoggedIn, community);
app.get("/creator", isLoggedIn, creator);
app.get("/create", isLoggedIn, createPost);
app.get("/manage_posts", isLoggedIn, managePost);
app.get("/post/:id", isLoggedIn, showPost);

//post-routes
app.post("/register", postRegister);
app.post("/login", postLogin);

//.env setup
require("dotenv").config();

//authentication-related-routes
app.get("/login", login);
app.get("/logout", postLogout);
app.get("/register", register);

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
