import React, { useEffect, useState } from "react";
import axios from "axios";
import SavedProperty from "./SavedProperty";
import "../styles/saved-properties.css";

const SavedProperties = () => {
  const [savedHouses, setSavedHouses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/Favourite/?populate=propertyListing")
      .then(({ data }) => setSavedHouses(data))
      .catch((err) => {
        console.log({ error1: err });
      });
  }, [savedHouses]);

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

export default SavedProperties;
