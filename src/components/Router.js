import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from ".././App.js"
import RecipeDetails from "./RecipeDetails.js"


function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipe" component={RecipeDetails} />
      </Switch>
    </Router>
  );
}
