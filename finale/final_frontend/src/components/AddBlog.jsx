import React, { useState } from 'react'
import axios from 'axios';
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
      .post("https://blog-app-project-63j1.onrender.com/blog/add",blog)
      .then(() => navigate("/"))
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-4">
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
                    <label for="formId1">Content</label>
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
                    <label for="formId1">Image URL</label>
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
                    <label for="formId1">Author</label>
                  </div>
                  <button type='submit' className='btn btn-primary'>Add Blog</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBlog
