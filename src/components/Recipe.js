import React from 'react';
import './Recipe.css';

function Recipe(props) {
    return (
       <div onClick={() => props.onClick(props)}
            className="container-recipe">
         <img src={props.image} alt="img" className="img-recipe"/>
         <h1>{props.title}</h1>
         <p>{props.calories}</p>
       </div>
    );
  }


export default Recipe;
