import React from "react";
import PropTypes from "prop-types";
import "../styles/saved-property.css";

const SavedProperty = ({ title, removeButton }) => {
  return (
    <div className="saved-property">
      <h2 className="saved-property-title">{title}</h2>
      <button
        type="button"
        className="saved-property-button"
        onClick={removeButton}
      >
        Remove
      </button>
    </div>
  );
};

SavedProperty.propTypes = {
  title: PropTypes.string.isRequired,
  removeButton: PropTypes.func.isRequired,
};

export default SavedProperty;
