import React from 'react';


function Recipe(prop) {
  return (
    <div>
      <h1>{prop.title}</h1>
      <p>{prop.calories}</p>
      <img src={prop.image} alt=""/>
    </div>
  );
}

export default Recipe;
