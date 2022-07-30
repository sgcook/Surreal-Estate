import React, { useState, useContext } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";
import AlertContext from "../utils/AlertContext";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Cottage",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const { alert, setAlert } = useContext(AlertContext);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:3000/api/v1/PropertyListing/`, { ...fields })
      .then(() => {
        setAlert({
          message: "Property Added",
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

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h3 className="heading">Add Property</h3>
      <form onSubmit={handleAddProperty} className="add-property__form">
        <Alert message={alert.message} success={alert.isSuccess} />

        <label htmlFor="title">
          <input
            className="add-property__item property-input"
            id="title"
            name="title"
            type="text"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="Coastal Cottage"
          />
        </label>

        <label htmlFor="type">
          <select
            className="add-property__item"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
            placeholder="Cottage"
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          <input
            className="add-property__item property-input"
            id="bedrooms"
            name="bedrooms"
            type="number"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="1"
          />
        </label>

        <label htmlFor="bathrooms">
          <input
            className="add-property__item property-input"
            id="bathrooms"
            name="bathrooms"
            type="number"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="1"
          />
        </label>

        <label htmlFor="price">
          <span>£</span>
          <input
            className="add-property__item property-input"
            id="price"
            name="price"
            type="number"
            value={fields.price}
            onChange={handleFieldChange}
            step="1000"
            min="50000"
            placeholder="170,000"
          />
        </label>

        <label htmlFor="city">
          <select
            className="add-property__item"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="email">
          <input
            className="add-property__item property-input"
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="john.smith@email.co.uk"
          />
        </label>

        <button className="add-property__item property-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
