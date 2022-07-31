import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import SavedProperty from "./SavedProperty";
import "../styles/saved-properties.css";

const SavedProperties = ({ savedHouses, setSavedHouses }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/Favourite/?populate=propertyListing")
      .then(({ data }) => setSavedHouses(data))
      .catch((err) => {
        console.log({ error1: err });
      });
  }, [savedHouses, setSavedHouses]);

  return (
    <div>
      <h2 className="heading">Saved Properties</h2>
      {savedHouses.length === 0 && (
        <p className="loading">Loading OR No saved properties!</p>
      )}
      <div>
        {savedHouses.map((property) => (
          <SavedProperty {...property} key={property._id} />
        ))}
      </div>
    </div>
  );
};

SavedProperties.propTypes = {
  savedHouses: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSavedHouses: PropTypes.func.isRequired,
};

export default SavedProperties;
