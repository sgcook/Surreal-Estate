import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../styles/saved-property.css";
import axios from "axios";
import Alert from "./Alert";
import AlertContext from "../utils/AlertContext";

const SavedProperty = ({ propertyListing, _id }) => {
  const { alert, setAlert } = useContext(AlertContext);

  const removeProperty = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/Favourite/${id}/`)
      .then(() => {
        setAlert({
          message: "Property has been removed from Favourites.",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Property could not be removed.",
          isSuccess: false,
        });
      });
  };

  return (
    <div className="saved-property">
      <h2 className="saved-property-title">{propertyListing.title}</h2>
      <Alert message={alert.message} success={alert.isSuccess} />
      <button
        type="button"
        className="saved-property-button"
        onClick={() => removeProperty(_id)}
      >
        Remove
      </button>
    </div>
  );
};

SavedProperty.propTypes = {
  propertyListing: PropTypes.arrayOf(PropTypes.string).isRequired,
  _id: PropTypes.string.isRequired,
};

export default SavedProperty;
