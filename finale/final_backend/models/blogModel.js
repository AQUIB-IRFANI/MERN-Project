const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  author: String
}, {
  timestamp: true
});

const blogModel = mongoose.model("finale", blogSchema);
module.exports = blogModel;