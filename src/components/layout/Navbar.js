import React from "react";
import "../../css/navbar.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = ({ title }) => {
  return (
    <div className="navbar">
      <div>
        <FontAwesomeIcon
          color={"#666"}
          style={{ marginRight: "16px" }}
          icon={faBrain}
        />
        <span className="nav-title">Memory-Game</span>
      </div>
      <div id="basic-navbar-nav">
        <div className="ml-auto">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
