const express = require("express");
const { addBlog, showBlogs, showBlog, updateBlog, deleteBlog } = require("../controllers/blogController");

const routes = express.Router();

routes.post("/add", addBlog);
routes.get("/", showBlogs);
routes.put("/:id", updateBlog);
routes.get("/blog/:id", showBlog);
routes.delete("/del/:id", deleteBlog);

module.exports = routes;