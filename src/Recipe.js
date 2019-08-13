import React from 'react';


function Recipe(prop) {
  return (
    <div>
      <h1>{prop.title}</h1>
      <p>{prop.calories}</p>
      <img src={prop.image} alt="img"/>
    </div>
  );
}

export default Recipe;
