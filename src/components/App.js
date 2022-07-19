import "../styles/app.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Properties} />

        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
