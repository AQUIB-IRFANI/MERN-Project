import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://blog-app-project-63j1.onrender.com/blog")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container my-4">
        <div className="row g-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm" key={blog._id}>
                <img
                  className="card-img-top"
                  src={blog.imageUrl}
                  alt={blog.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">Title: {blog.title}</h4>
                  <p className="card-text text-truncate">
                    Content: {blog.content}
                  </p>
                  <NavLink
                    className="btn btn-primary mt-auto"
                    to={`/${blog._id}`}
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
