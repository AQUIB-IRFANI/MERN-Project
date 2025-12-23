import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
const ShowBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://blog-app-project-63j1.onrender.com/blog/blog/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleClick = () => {
    axios
      .delete(`https://blog-app-project-63j1.onrender.com/blog/del/${id}`)
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
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <img
                className="card-img-top img-fluid"
                src={blog.imageUrl}
                alt={blog.title}
                style={{ maxHeight: "320px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4 className="card-title">Title: {blog.title}</h4>
                <p className="card-text text-muted">Content: {blog.content}</p>
                <p className="card-text">
                  <strong>Author:</strong> {blog.author}
                </p>
                <div className="d-flex gap-2">
                  <NavLink
                    className="btn btn-primary w-50"
                    to={`/update/${blog._id}`}
                  >
                    Update
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-danger w-50"
                    onClick={handleClick}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBlog;
