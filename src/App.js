import React, {Component} from 'react';
import './App.scss';
import Card from './components/Card';
import Search from './components/search';
import axios from 'axios';


class App extends Component {
  getSearch = (e) => {
    e.preventDefault();
    const episode = e.target.searching.value;
    console.log(episode);
    axios.get(`https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes/${episode}`)
    .then((res) => {
      console.log(res);
    } )
  }
  render() {
    return (
      <div>
        <Search getSearch={this.getSearch}/> 
        <h1>Rick and Morty</h1>
        <Card selectedId={this.selectedId}/>
      </div>
   );
  }
  
}

export default App;
