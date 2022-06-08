import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { FaPlane, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../trackling.png";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <FiMonitor className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <FaPlane className="icon" />
              <span>Trips</span>
            </li>
          </Link>
          <Link to="/create-trip" style={{ textDecoration: "none" }}>
            <li>
              <FaPlus className="icon" />
              <span>Create Trip</span>
            </li>
          </Link>
          <Link to="/user-list" style={{ textDecoration: "none" }}>
            <li>
              <BsFillPersonLinesFill className="icon" />
              <span>Users</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
