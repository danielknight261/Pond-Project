const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Picture = require("./models/Picture");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");

require("dotenv").config();
const app = express();

// Set up bcrypt and jwt secrets
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "j55439t04jngfnkj644j2323";

// Set up middleware and configuration
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);
console.log(process.env.MONGO_URL);

// Test endpoint
app.get("/test", (req, res) => {
  res.json("test ok");
});

// User registration endpoint
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// User login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    json("not found");
  }
});

// User profile endpoint
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

// User logout endpoint
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

// Upload photo by link endpoint
app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "PhotoPond" + Date.now() + ".jpg";

  try {
    await imageDownloader.image({
      url: link,
      dest: __dirname + "/uploads/" + newName,
    });
    res.json(newName);
  } catch (error) {
    console.error("Error downloading image:", error);
    res.status(500).json({ message: "Error downloading image" });
  }
});

const photosMiddleware = multer({ dest: "uploads/" });
app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads/", ""));
  }
  res.json(uploadedFiles);
});

app.post("/pictures", (req, res) => {
  const { token } = req.cookies;
  const { title, location, photos:addedPhotos, description, tags, license } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    const pictureDoc = await Picture.create({
      creator: userData.id,
      title,
      location,
      addedPhotos,
      description,
      tags,
      license,
    });
    res.json(pictureDoc);
  });
});

app.get("/pictures", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await Picture.find({ creator: id }));
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
