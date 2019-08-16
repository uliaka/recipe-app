import React from 'react';
import './Loader.css'

function Loader() {
  const containers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    containers.map(container => (
      <div className="container-recipe-loading"><span>{container}</span>
      <div class="loader"></div>
      </div>
    ))
  );
}

export default Loader;
