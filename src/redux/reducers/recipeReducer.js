import { FETCH_RECIPES } from '../actions/recipeActions.js';
import { ADD_RECIPE } from '../actions/addRecipeActions';

const initialState = {
    items: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_RECIPE:
    return state.concat([action.data]);
    case FETCH_RECIPES:
      return {
        ...state,
        items: action.payload.recipies
        }
  default: 
        return state;
  }
}

console.log("state", initialState)