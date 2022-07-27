import React from "react";
import PropTypes from "prop-types";
import "../styles/property-card.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

const PropertyCard = ({
  bathrooms,
  bedrooms,
  city,
  email,
  price,
  title,
  type,
}) => {
  return (
    <div className="property-card">
      <h3>{title}</h3>
      <ul className="property-card__list">
        <li className="type-city">
          {type} - {city}
        </li>
        <li className="bathrooms">
          {/* <FontAwesomeIcon icon={regular("fa fa-bath")} />  */}
          {bathrooms}
        </li>
        <li className="bedrooms">
          {/* <FontAwesomeIcon icon={regular("fa fa-bed")} />  */}
          {bedrooms}
        </li>
        <li className="price">£{price}</li>
      </ul>
      <p className="email-p">
        <a href={`mailto:${email}`} className="email-link">
          {/* <FontAwesomeIcon icon={regular("fa fa-envelope")} /> */}
          Email
        </a>
      </p>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  /* fix price prop */
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
