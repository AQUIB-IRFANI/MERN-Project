const blogModel = require("../models/blogModel");

exports.addBlog = async (req, res) => {
  const new_blog = new blogModel(req.body);
  const result = await new_blog.save();
  res.status(200).json(result);
}


exports.showBlogs = async (req, res) => {
  const result = await blogModel.find();
  if (result != null) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "No Blogs" });
  }
}

exports.showBlog = async (req, res) => {
  const result = await blogModel.findById(req.params.id);
  if (result != null) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "No Blogs" });
  }
}

exports.updateBlog = async (req, res) => {
  const result = await blogModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(result);
}

exports.deleteBlog = async (req, res) => {
  const result = await blogModel.findByIdAndDelete(req.params.id);
  res.status(200).json(result);
}