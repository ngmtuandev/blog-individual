const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || "dfzsfgshw",
  api_key: process.env.CLOUDINARY_KEY || "495651363447862",
  api_secret: process.env.CLOUDINARY_SECRET || "2bdxK52KICpvJLDfE5I7tPsL_pY",
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  params: {
    folder: "blog",
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
