import React, { Fragment, useEffect, useState } from 'react';

function RecipeDetails (props) {
  const title = props.match.params.id;
  return (
    <Fragment>
      <p>Recipe page</p>

        {JSON.stringify(props)}
    </Fragment>
 )
}


export default RecipeDetails;
