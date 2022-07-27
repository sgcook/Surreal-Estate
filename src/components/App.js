import "../styles/app.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/view-properties" element={<Properties />} />
        <Route exact path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
