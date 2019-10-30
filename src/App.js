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
import RecipeList from './components/RecipeList.js'
import { Provider } from 'react-redux';
import store from './store';


class App extends React.Component {
  /*constructor(props) {
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

  onClick(recipe) {
    const { title, image, calories, ingredients } = recipe;
    this.props.history.push(`/recipe/${title}`, {
      title, image, calories, ingredients
    });
  }
*/
  render() {
    console.log('this.state', this.state)
    return (
      <Provider store={store}>
      <div className="App">
       <RecipeList />
      </div>
      </Provider>
    )
  }
}

export default App;
