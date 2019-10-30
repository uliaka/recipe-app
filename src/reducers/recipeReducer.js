import { FETCH_RECIPES } from '../actions/recipeActions';

const initialState = {
    items: [],
}

export default function(state = initialState, action) {
    console.log("state", state)
    switch(action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                items: action.payload.recipies
            }
        default: 
          return state;
    }
}