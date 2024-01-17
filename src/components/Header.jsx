import React from "react";
import logo from "../image 2.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="" />
          <nav>
            <Link to="/menu">
              <h3>Menu</h3>
            </Link>
            <Link to="/orders">
              <h3>Orders</h3>
            </Link>
            <Link to="/admin">
              <h3>Admin</h3>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
