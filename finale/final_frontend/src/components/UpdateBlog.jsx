import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateBlog = () => {
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    axios
      .get(`https://blog-app-project-63j1.onrender.com/blog/blog/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://blog-app-project-63j1.onrender.com/blog/${id}`, blog)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  if (!blog) {
    return (
      <div className="container text-center my-5">
        <p>Loading blog...</p>
      </div>
    );
  }

  return (
    <>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="text-center mb-3">Update Blog</h5>
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
                    <label htmlFor="imageUrl">Image Url</label>
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
                  <button type="submit" className="btn btn-primary w-100">
                    Update Blog
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

export default UpdateBlog;
