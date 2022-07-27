import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <form className="sidebar-form" onSubmit={handleSearch}>
        <input
          className="sidebar-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a property"
        />
        <button type="submit">Search</button>
      </form>
      <ul className="sidebar-list">
        <li className="sidebar-item label">Filter by city</li>
        <Link
          className="sidebar-item link"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>
        <Link
          className="sidebar-item link"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>
        <Link
          className="sidebar-item link"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>
        <Link
          className="sidebar-item link"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>

        <li className="sidebar-item label sort">Sort by</li>
        <Link
          className="sidebar-item link"
          to={buildQueryString("sort", { price: 1 })}
        >
          Price Ascending
        </Link>
        <Link
          className="sidebar-item link"
          to={buildQueryString("sort", { price: -1 })}
        >
          Price Descending
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
