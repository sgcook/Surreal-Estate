import "../styles/app.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    setUserId(response.userID);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    window.FB.logout(function () {
      setUserId(null);
    });
  };

  return (
    <div className="App">
      <Navbar onLogin={handleLogin} userID={userId} onLogout={handleLogout} />

      <Routes>
        <Route path="/view-properties" element={<Properties />} />
        <Route exact path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
