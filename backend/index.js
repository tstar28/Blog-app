const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authroute = require("./routes/auth");
const userroute = require("./routes/user");
const postroute = require("./routes/post");
const categoryroute = require("./models/Category");
const multer = require('multer')

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("mongo connected"))
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use("/api/auth", authroute);
app.use("/api/users", userroute);
app.use("/api/post", postroute);
app.use("/api/categories", categoryroute);
app.listen(5000, () => {
  console.log("server is listening...");
});
