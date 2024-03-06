
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaMap, FaChartSimple } from "react-icons/fa6";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">SENSOR</div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/charts">
            <FaChartSimple className="icon" /> Charts
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/map">
            <FaMap className="icon" /> Map
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
