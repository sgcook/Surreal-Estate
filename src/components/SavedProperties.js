import React, { useEffect, useState } from "react";
import axios from "axios";
import SavedProperty from "./SavedProperty";
import "../styles/saved-properties.css";

const SavedProperties = () => {
  const [savedHouses, setSavedHouses] = useState([]);
  const favProperties = [];

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/Favourite/?populate=propertyListing")
      .then(({ data }) =>
        data.map((house) => favProperties.push(house.propertyListing))
      )
      .catch((err) => {
        console.log({ error1: err });
      });
    setSavedHouses(favProperties);
  }, []);

  const handleButton = (savedPrice) => {
    console.log(favProperties);
    // const index = favProperties
    // setSavedHouses(filtered);
    // console.log(savedHouses);
  };

  return (
    <div>
      <h1 className="saved-heading">Saved Properties</h1>
      {savedHouses.length === 0 && (
        <p className="loading">Loading OR No saved properties!</p>
      )}
      <div>
        {savedHouses.map((property) => (
          <SavedProperty
            {...property}
            key={property.price}
            removeButton={() => handleButton(property.price)}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedProperties;
