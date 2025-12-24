import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <NavLink to="/dashboard" className="nav-link">
        Dashboard
      </NavLink>

      <NavLink to="/products" className="nav-link">
        Products
      </NavLink>

      <NavLink to="/upload" className="nav-link">
        Upload
      </NavLink>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
