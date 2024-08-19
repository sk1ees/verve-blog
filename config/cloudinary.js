const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();
//cloudinary-config

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//create new multer storage

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profile-image",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

//changing multer storage with new one

const upload = multer({ storage: storage });

module.exports = upload;
