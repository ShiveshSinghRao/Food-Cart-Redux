import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <div className="navContainer">
        <Link to="/menu">
          <button>Menu</button>
        </Link>
      </div>
      <div className="navContainer">
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </div>
      <div className="navContainer">
        <HashLink to="/#contactId">
          <button>Contact us</button>
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
