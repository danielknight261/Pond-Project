const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const connectDB = require('../config/db');
const fs = require('fs');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  if (!req.body.name || !req.body.tags || !req.file) {
    return res.status(400).json({ message: 'Please fill in all fields and select an image' });
  }

  try {
    const tempPath = `./uploads/${Date.now()}-${req.file.originalname}`;
    await fs.promises.writeFile(tempPath, req.file.buffer);

    const isFileExists = await fs.promises.access(tempPath, fs.constants.F_OK)
      .then(() => true)
      .catch(() => false);
    
    if (!isFileExists) {
      throw new Error(`File ${tempPath} does not exist`);
    }

    const result = await cloudinary.uploader.upload(tempPath, {
      resource_type: 'image',
      public_id: `${req.body.name}-${Date.now()}`,
    });

    await fs.promises.unlink(tempPath);

    const db = await connectDB();
    const collection = db.collection('images');

    const image = {
      name: req.body.name,
      tags: req.body.tags.split(',').map((tag) => tag.trim()),
      public_id: result.public_id,
      url: result.secure_url,
    };

    await collection.insertOne(image);
    res.status(201).json({ message: 'Image uploaded and saved' });
  } catch (error) {
    console.error('Error in /api/upload:', error);
    res.status(500).json({ message: 'Error uploading image' });
  }
});

module.exports = router;
