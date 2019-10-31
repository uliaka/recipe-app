import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeDetails from './components/RecipeDetails.js';
import AddRecipe from './components/AddRecipe.js'


function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/recipies" component={App} />
        <Route path="/recipes/:id" component={RecipeDetails} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterComponent />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
