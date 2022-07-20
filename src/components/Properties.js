import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div className="properties-page">
      Properties Page
      <PropertyCard
        bathrooms={3}
        bedrooms={2}
        city="Leeds"
        email="joe@gmail.com"
        price={20000}
        title="beautiful home"
        type="bungalow"
      />
    </div>
  );
};

export default Properties;
