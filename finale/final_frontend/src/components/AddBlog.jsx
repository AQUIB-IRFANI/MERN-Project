import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://blog-app-project-63j1.onrender.com/blog/add", blog)
      .then(() => navigate("/"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="title"
                      placeholder=""
                      value={blog.title}
                      onChange={handleChange}
                    />
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="content"
                      id="content"
                      placeholder=""
                      value={blog.content}
                      onChange={handleChange}
                    />
                    <label htmlFor="content">Content</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="imageUrl"
                      id="imageUrl"
                      placeholder=""
                      value={blog.imageUrl}
                      onChange={handleChange}
                    />
                    <label htmlFor="imageUrl">Image URL</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      id="author"
                      placeholder=""
                      value={blog.author}
                      onChange={handleChange}
                    />
                    <label htmlFor="author">Author</label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Blog
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
