import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import AlertContext from "../utils/AlertContext";
import PropertyCard from "./PropertyCard";
import Sidebar from "./Sidebar";
import "../styles/properties.css";
import Alert from "./Alert";

const Properties = ({ savedHouses, setSavedHouses, userID }) => {
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

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/Favourite/?populate=propertyListing")
      .then(({ data }) => setSavedHouses(data))
      .catch((err) => {
        console.log({ error1: err });
      });
  }, [savedHouses]);

  const handleSaveProperty = (propertyId) => {
    const mapped = savedHouses.map((house) => house.propertyListing._id);
    if (mapped.includes(propertyId)) {
      return setAlert({
        message: "Property has already been saved.",
        isSuccess: false,
      });
    }
    return axios
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
      <h2 className="heading">Properties</h2>
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
  savedHouses: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSavedHouses: PropTypes.func.isRequired,
  userID: PropTypes.string,
};

Properties.defaultProps = {
  userID: "",
};

export default Properties;
