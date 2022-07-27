import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import image from "../surrealEstateLogo.png";

const Navbar = ({ onLogin, onLogout, userID }) => {
  return (
    <div className="navbar">
      <img className="surrealEstateLogo" src={image} alt="surrealEstateLogo" />
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/view-properties">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="/add-property">
          Add Property
        </Link>
        {userID ? (
          <button type="button" onClick={onLogout}>
            Sign Out
          </button>
        ) : (
          <FacebookLogin callback={onLogin} appId="774246670282431" />
        )}
      </ul>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  userID: PropTypes.string,
};

Navbar.defaultProps = {
  onLogin: () => {},
  onLogout: () => {},
  userID: "",
};
