import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import AlertContext from "../utils/AlertContext";
import PropertyCard from "./PropertyCard";
import Sidebar from "./Sidebar";
import "../styles/properties.css";
import Alert from "./Alert";

const Properties = ({ userID }) => {
  const [properties, setProperties] = useState([]);
  const { alert, setAlert } = useContext(AlertContext);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing/")
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/${search}`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios
      .post("http://localhost:3000/api/v1/Favourite", {
        propertyListing: propertyId,
        fbUserId: userID,
      })
      .then(() => {
        setAlert({
          message: "Property has been saved.",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  return (
    <div className="properties">
      <Sidebar />
      {alert.message ? (
        <div className="properties-alert">
          <Alert message={alert.message} success={alert.isSuccess} />
        </div>
      ) : null}
      <h1 className="heading">Saved Properties</h1>
      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard
            {...property}
            userID={userID}
            onSaveProperty={handleSaveProperty}
            key={property.price}
          />
        ))}
      </div>
    </div>
  );
};

Properties.propTypes = {
  userID: PropTypes.string,
};

Properties.defaultProps = {
  userID: "",
};

export default Properties;
