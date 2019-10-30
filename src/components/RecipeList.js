import React from 'react';
import Recipe from './Recipe.js';
import { connect } from 'react-redux';
import fetchRecipies from '../actions/recipeActions';

class recipeList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipies());
  }
  render() {
    const { recipies = [] } = this.props;
    console.log('this.props', this.props)
    return (
        <div className="App">
          <div className="grid-container">
            {recipies.map(recipe => (
              <Recipe
                image={recipe.recipe.image}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                ingredients={recipe.recipe.ingredientLines}
                onClick={this.onClick}
              />
            ))
            }
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  recipies: state.recipies.items,
});

export default connect(mapStateToProps)(recipeList);
