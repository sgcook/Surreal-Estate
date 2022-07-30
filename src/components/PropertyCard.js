import React from "react";
import PropTypes from "prop-types";
import "../styles/property-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBath,
  faBed,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  _id,
  bathrooms,
  bedrooms,
  city,
  email,
  price,
  title,
  type,
  userID,
  onSaveProperty,
}) => {
  return (
    <div className="property-card">
      <h3>{title}</h3>
      <ul className="property-card__list">
        <li className="type-city">
          {type} - {city}
        </li>
        <li className="bathrooms">
          <FontAwesomeIcon className="icon" icon={faBath} />
          {bathrooms}
        </li>
        <li className="bedrooms">
          <FontAwesomeIcon className="icon" icon={faBed} />
          {bedrooms}
        </li>
        <li className="price">£{price}</li>
      </ul>
      <p className="email-p">
        <a href={`mailto:${email}`} className="email-link">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          Email
        </a>
      </p>
      {userID && (
        <button
          type="button"
          className="save"
          onClick={() => onSaveProperty(_id)}
        >
          <FontAwesomeIcon className="icon" icon={faStar} />
          Save
        </button>
      )}
    </div>
  );
};

PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string,
  onSaveProperty: PropTypes.func,
};

PropertyCard.defaultProps = {
  userID: "",
  onSaveProperty: () => {},
};

export default PropertyCard;
