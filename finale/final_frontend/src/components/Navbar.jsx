import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container">
          <NavLink
            className="navbar-brand d-flex align-items-center gap-2"
            to="/"
          >
            <img
              src="https://img.freepik.com/premium-vector/blog-icon-vector-image-can-be-used-public-relations-agency_120816-188181.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Blog Logo"
              style={{
                width: "36px",
                height: "36px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <span>BlogApp</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/add"
                >
                  Add Blog
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
