import axios from "axios";
import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing/")
      .then(({ data }) => setProperties(data))
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <PropertyCard {...property} />
      ))}
    </div>
  );
};

export default Properties;
