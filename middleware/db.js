require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database connected!");
  })
  .catch((err) => {
    console.log("error connecting to database", err);
  });
