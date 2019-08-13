
/* eslint-disable */

import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe.js';

function App() {

  const YOUR_APP_ID = "049f21d4";
  const YOUR_APP_KEY = "7d33f695e16118d0c67da63a5522d856";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [])


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
    const res = await response.json();
    setRecipes(res.hits);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-place"/>
        <button className="search-button">
          search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  )
}

export default App;
