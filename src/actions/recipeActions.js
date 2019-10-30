export const FETCH_RECIPES = 'FETCH_RECIPES';

const fetchRecipe = () => dispatch => {
  fetch(`https://api.edamam.com/search?q=potato&app_id=$049f21d4&app_key=$7d33f695e16118d0c67da63a5522d856`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
  })
  .then(res => res.json())
  .then(res => dispatch({
    type: FETCH_RECIPES,
    payload: { recipies: res.hits },
  }))
  .catch(err => {
      console.log(err)
  })
}

export default fetchRecipe;