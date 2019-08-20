import React, { Fragment, useEffect, useState } from 'react';
import './RecipeDetails.css'

function RecipeDetails (props) {
  const title = props.match.params.id;
  const titleRecipe = props.history.location.state.title
  const ingredients = props.history.location.state.ingredients
  return (
    <div className="recipe-wrap">
      <div className="container">
        <h1>{titleRecipe}</h1>
        <ul>
          {ingredients.map(ingredient => (
            <li>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default RecipeDetails;
