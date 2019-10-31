export const ADD_RECIPE = 'ADD_RECIPE';

const setRecipe = (recipe) => dispatch => {
    console.log("recipe", recipe)
    fetch(`https://postman-echo.com/post`, {
      method: 'POST',
      headers: {
        'Content-type': 'multipart/form-data'
      },
    })
    .then(res => res.send(recipe).status(200))
    .then(res => dispatch({
      type: ADD_RECIPE,
      payload: recipe
    }))
    .catch(err => {
        console.log(err)
    })
  }
  
  export default setRecipe