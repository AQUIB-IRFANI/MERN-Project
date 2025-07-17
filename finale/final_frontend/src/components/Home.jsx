import React, { useEffect, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom';
const Home = () => {
  
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/blog')
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err))
  }, []);


  return (
    <>
      <div
        className="container"
      >
        <div
          className="row justify-content-center align-items-center g-2"
        >
          {
            blogs.map((blog)=>(
            <div className="col-4">
              <div className="card" key={blog._id}>
                  <img className="card-img-top" src={blog.imageUrl} alt="Title" height={300} width={200}/>
                <div className="card-body">
                    <h4 className="card-title">Title: { blog.title}</h4>
                    <p className="card-text">Content: { blog.content}</p>
                  <NavLink
                    name=""
                    id=""
                    className="btn btn-primary"
                    to={`/${ blog._id}`}
                    role="button"
                  >Read More </NavLink>
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home