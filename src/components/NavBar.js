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
        {userID && (
          <div className="navbar-links">
            <Link className="navbar-links-item" to="/view-properties">
              View Properties
            </Link>
            <Link className="navbar-links-item" to="/add-property">
              Add Property
            </Link>
            <Link className="navbar-links-item" to="/saved-properties">
              Saved Properties
            </Link>
          </div>
        )}
        {userID ? (
          <button type="button" className="navbar-sign-out" onClick={onLogout}>
            Sign Out
          </button>
        ) : (
          <FacebookLogin
            callback={onLogin}
            appId="774246670282431"
            cssClass="navbar-facebook-button"
          />
        )}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string,
};

Navbar.defaultProps = {
  userID: "",
};

export default Navbar;
