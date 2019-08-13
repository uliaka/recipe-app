import React from 'react';
import './Recipe.css';


function Recipe(prop) {
  return (
    <div className="container-recipe">
      <img src={prop.image} alt="img" className="img-recipe"/>
      <h1>{prop.title}</h1>
      <p>{prop.calories}</p>
    </div>
  );
}

export default Recipe;
