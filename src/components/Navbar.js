import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <h1>Shopping App</h1>
      <div>
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </div>
    </nav>
  );
}

export default Navbar;
