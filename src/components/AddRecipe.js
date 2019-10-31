import React from 'react';
import Recipe from './Recipe.js';
import { connect } from 'react-redux';
import setRecipe from '../redux/actions/addRecipeActions.js'

/*function mapDispatchToProps(dispatch) {
    return {
        setRecipe: recipe => dispatch(setRecipe(recipe))
    };
  }

class AddRecipe extends React.Component {

    render () {
        const {handleSubmit} = this.props;
        return (
          <form onSubmit={handleSubmit}>
            <input
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
            <input
              name="recipe"
              component="input"
              type="text"
              placeholder="Recipe"
            />
            <button type="submit" label="submit">Submit</button>
          </form>
        );
      }
}
*/

class AddRecipe extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const recipe =  this.getRecipe.value;
    const data = {
      id: new Date(),
      title,
      recipe
    }
    this.props.dispatch(setRecipe(data));
    console.log("data", data)
    this.getTitle.value = '';
    this.getRecipe.value = '';
  }
render() {
  return (
    <div>
      <h1>Create recipe</h1>
      <form onSubmit={this.handleSubmit}>
      <input required type="text" ref={(input)=>this.getTitle = input} 
        placeholder="Enter recipe title"/>
      <br /><br />
      <textarea required rows="5" ref={(input)=>this.getRecipe = input} cols="28" 
        placeholder="Enter recipe" />
      <br /><br />
      <button>Add</button>
      </form>
    </div>
    );
  }
}
export default connect()(AddRecipe);

//export default connect(null, mapDispatchToProps)(AddRecipe);
