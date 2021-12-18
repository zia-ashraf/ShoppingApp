import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2>ShoppersDestination</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contacts</Link>
        </li>
        <li>
          <Link to="/login">Login/SignUp</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
