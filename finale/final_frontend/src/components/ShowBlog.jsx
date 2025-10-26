import React, { useEffect, useState } from 'react'
import { useParams,useNavigate,NavLink } from 'react-router-dom';
import axios from 'axios';
const ShowBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://blog-app-frontend-rxob.onrender.com/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err))
  }, []);
  const handleClick = () => {
    axios
      .delete(`https://blog-app-frontend-rxob.onrender.com/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err))
  };
  return (
    <>
      <div
        className="container"
      >
        <div
          className="row justify-content-center align-items-center g-2"
        >
          <div className="col">
            <div className="card">
              <img className="card-img-top" src={ blog.imageUrl} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Title: {blog.title}</h4>
                <p className="card-text">Content: {blog.content}</p>
                <p className='card-text'>Author: {blog.author}</p>
                <NavLink
                  name=""
                  id=""
                  className="btn btn-primary"
                  to={ `/update/${blog._id}`}
                  role="button"
                  >Update</NavLink>
                <button type='submit' className='btn btn-danger' onClick={handleClick}>
                  Delete
                </button>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </>
  )
}

export default ShowBlog
