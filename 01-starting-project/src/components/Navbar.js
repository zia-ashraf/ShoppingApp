import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2>ShoppersDestination</h2>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Login/SignUp</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
