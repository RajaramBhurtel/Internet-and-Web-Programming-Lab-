import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>Student Management System</h2>

      <div>
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/register">Register</Link>}
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {isLoggedIn && <Link to="/students">Students</Link>}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) =>
              (e.target.style.color = "rgba(255, 255, 255, 0.9)")
            }
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
