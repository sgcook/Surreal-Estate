import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <Router>
      <div className="sidebar">
        <ul className="sidebar-list">
          <Link className="sidebar-link">Filter by city</Link>
          <Link className="sidebar-link" to={`/?query={"city": "Manchester"}`}>
            Manchester
          </Link>
          <Link className="sidebar-link" to={`/?query={"city": "Leeds"}`}>
            Leeds
          </Link>
          <Link className="sidebar-link" to={`/?query={"city": "Sheffield"}`}>
            Sheffield
          </Link>
          <Link className="sidebar-link" to={`/?query={"city": "Liverpool"}`}>
            Liverpool
          </Link>
          <Link className="sidebar-link">Sort by</Link>
          <Link className="sidebar-link">Price Ascending</Link>
          <Link className="sidebar-link">Price Descending</Link>
        </ul>
      </div>
    </Router>
  );
};

export default Sidebar;
