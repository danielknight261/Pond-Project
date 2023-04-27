require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8001;
const cors = require("cors");
const cloudinary = require("./cloudinary/cloudinary");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/", async (req, res) => {
  const { image } = req.body;

  try {
    // Upload
    const uploadedImage = await cloudinary.uploader.upload(image, {
      upload_preset: "unsigned_upload",
      public_id: "User_Pictures",
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"]
    });

    res.json(uploadedImage);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred while uploading the image" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
