import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/lab19" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/lab19/about" style={{ marginRight: "10px" }}>
        About
      </Link>
      <Link to="/lab19/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
