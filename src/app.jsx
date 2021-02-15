import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/home";
import Details from "./pages/detail";
// styles
import "./App.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
    </Switch>
  </Router>
);

export default App;
