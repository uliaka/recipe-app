import React from 'react';
import './App.css';
import Recipe from './components/Recipe.js';
import Loader from './components/Loader.js';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import imgHeaderLeft from './image/s1.png';
import imgHeaderRight from './image/s3.jpg';
import  imgFooterLeft from './image/s2.png';
import  imgFooterRight from './image/s4.jpg';
import RecipeDetails from './components/RecipeDetails.js'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: '',
      textToSearch: 'chicken',
      loading: true,
    }
    this.searchUpdate = this.searchUpdate.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.onClick = this.onClick.bind(this);
}

  //const id = "049f21d4";
 //const key = "7d33f695e16118d0c67da63a5522d856";


  componentDidMount() {
    this.getRecipes()
  }

  getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${this.state.textToSearch}&app_id=$049f21d4&app_key=$7d33f695e16118d0c67da63a5522d856`);
    const res = await response.json();
    this.setState({ recipes: res.hits });
    console.log(res.hits)
    this.setState({ loading: false});
  }

  searchUpdate(e) {
    this.setState({ textToSearch: e.target.value })
  }

  getSearch(e) {
    e.preventDefault();
  //  this.setState({search});
    this.setState({ search: "" });
  }

  onClick() {
    this.props.history.push("/recipe");
  }

  render() {
    console.log('this.state', this.state)
    return (
      <div className="App">
        <form className="search-form">
          <input className="search-place" placeholder="Search..." value={this.state.search} onChange={this.searchUpdate}/>
          <button className="search-button" onClick={this.getSearch}>
            <span className="search-icon"></span>
          </button>
        </form>
        <div className="list-recipes">
         <img className="top-img-left" src={imgHeaderLeft} />
         <img className="top-img-right" src={imgHeaderRight} />
         <img className="bottom-img-left" src={imgFooterLeft} />
         <img className="bottom-img-right" src={imgFooterRight} />
          <div className="grid-container">
            { this.state.loading ? (
               <Loader />
            ) : (
              this.state.recipes.map(recipe => (
                  <Recipe
                    image={recipe.recipe.image}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    ingredients={recipe.recipe.ingredientLines}
                    onClick={this.onClick}
                  />
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
