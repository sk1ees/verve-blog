const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    heading: String,
    banner: String,
    desc: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
