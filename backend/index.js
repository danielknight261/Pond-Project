require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.port
const cors = require("cors")
const cloudinary = require("./cloudinary/cloudinary")

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true , limit: '50mb'}));