const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (file) => {
  const tempPath = file.path;
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(tempPath);

    // Delete local file after upload
    await writeFile(tempPath, Buffer.alloc(0));

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = { uploadToCloudinary };
