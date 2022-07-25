import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
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

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      <Sidebar />
      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard {...property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
