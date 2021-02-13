import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
// import Details from "./pages/details";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/details" component={Details} /> */}
    </Switch>
  </Router>
);

export default App;
