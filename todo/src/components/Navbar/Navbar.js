import React from "react";
import "./styles.css";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return(
    <nav className="container">
      <Logo />
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;