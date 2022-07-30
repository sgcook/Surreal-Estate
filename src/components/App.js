import "../styles/app.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import AlertContext from "../utils/AlertContext";
import SavedProperties from "./SavedProperties";

const App = () => {
  const [userId, setUserId] = useState("");
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  const handleLogin = (response) => {
    setUserId(response.userID);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    window.FB.logout(function () {
      setUserId(null);
    });
  };

  useEffect(() => {
    const removeAlert = setTimeout(() => {
      setAlert({ message: "", isSuccess: false });
    }, 3000);
    return () => clearTimeout(removeAlert);
  }, [alert]);

  return (
    <div className="App">
      <AlertContext.Provider value={{ alert, setAlert }}>
        <Navbar onLogin={handleLogin} userID={userId} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/view-properties"
            element={<Properties userID={userId} />}
          />
          <Route exact path="/add-property" element={<AddProperty />} />
          <Route exact path="/saved-properties" element={<SavedProperties />} />
        </Routes>
      </AlertContext.Provider>
    </div>
  );
};

export default App;
