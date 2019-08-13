import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe.js';

function App() {

  const YOUR_APP_ID = "049f21d4";
  const YOUR_APP_KEY = "7d33f695e16118d0c67da63a5522d856";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [textToSearch, setTextToSearch] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [textToSearch])


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${textToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
    const res = await response.json();
    setRecipes(res.hits);
  }

  function searchUpdate(e) {
    setSearch(e.target.value)
    console.log(search)
  }

  function getSearch(e) {
    e.preventDefault();
    setTextToSearch(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-place" value={search} onChange={searchUpdate}/>
        <button className="search-button" onClick={getSearch}>
          <span className="search-icon"></span>
        </button>
      </form>
      <div className="list-recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
