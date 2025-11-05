import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateBlog = () => {
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const handleChange = (e) => {
    setBlog({
      ...blog, [e.target.name]: e.target.value
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

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="formId1"
                      placeholder=""
                      value={blog.title}
                      onChange={handleChange}
                    />
                    <label for="formId1">Title</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="content"
                      id="formId1"
                      placeholder=""
                      value={blog.content}
                      onChange={handleChange}
                    />
                    <label for="formId1">content</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="imageUrl"
                      id="formId1"
                      placeholder=""
                      value={blog.imageUrl}
                      onChange={handleChange}
                    />
                    <label for="formId1">Image Url</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      id="formId1"
                      placeholder=""
                      value={blog.author}
                      onChange={handleChange}
                    />
                    <label for="formId1">author</label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    update Blog
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
