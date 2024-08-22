const express = require("express");
const app = express();
const upload = require("./config/cloudinary");
const uploadPost = require("./config/postBanner");
const home = require("./routes/initial-routes/home");
const profile = require("./routes/initial-routes/profile");
const community = require("./routes/initial-routes/community");
const creator = require("./routes/initial-routes/creator");
const createPost = require("./routes/initial-routes/createPost");
const managePost = require("./routes/initial-routes/managePost");
const showPost = require("./routes/initial-routes/showPost");
const creatorPost = require("./routes/initial-routes/creatorPost");
const editPost = require("./routes/initial-routes/editPost");
const login = require("./routes/auth/login");
const register = require("./routes/auth/register");
const path = require("path");
const db = require("./middleware/db");
const isLoggedIn = require("./middleware/isLoggedIn");
const postRegister = require("./routes/post-routes/postRegister");
const postCreate = require("./routes/post-routes/postCreate");
const postDelete = require("./routes/post-routes/postDelete");
const postLogin = require("./routes/post-routes/postLogin");
const cookieParser = require("cookie-parser");
const postLogout = require("./routes/post-routes/postLogout");
const PostEdit = require("./routes/post-routes/postEdit");
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
app.get("/create-post", isLoggedIn, createPost);
app.get("/manage-posts", isLoggedIn, managePost);
app.get("/post/:id", isLoggedIn, showPost);
app.get("/creator/:name", isLoggedIn, creatorPost);

//post-routes
app.post("/register", upload.single("profileImage"), postRegister);
app.post(
  "/create-post",
  uploadPost.single("postBanner"),
  isLoggedIn,
  postCreate
);
app.post("/edit/:id", uploadPost.single("postBanner"), isLoggedIn, PostEdit);

app.post("/login", postLogin);
app.get("/delete/:id", isLoggedIn, postDelete);
app.get("/edit/:id", isLoggedIn, editPost);

//.env setup
require("dotenv").config();

//authentication-related-routes
app.get("/login", login);
app.get("/logout", postLogout);
app.get("/register", register);

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
