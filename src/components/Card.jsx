import React, {Component} from 'react';
import axios from 'axios';
import './cards.scss';

class Card extends Component {
  constructor(props){
    super(props);
    this.state= {
      info: [],
      favorite: false,
    }
    this.ToggleButton = this.ToggleButton.bind(this);
  }
  
  componentDidMount() {
    axios.get(`https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`)
      .then(res => {
        const items = res.data._embedded.episodes;
        console.log('items', items)
        this.setState({ info : items });
      })
  }
  ToggleButton(e){
    const element = e.target.id
    console.log('ghjkghjkl');
    this.setState((currentState) => ({
        favorite: !currentState.favorite, 
    }));
  }

  renderCards() {
    let component = this.state.info.map(item => {
      if(item.image) {
        return (
          <div className="cards" key={item.id}>            
            <img src={item.image.medium} alt=""/>
            <p>{item.name}</p>
            <p>{item.summary}</p>
            <button element={this.state.favorite === item.id} className={this.state.favorite ? 'start-green' : 'start'} onClick={this.ToggleButton}>Favorite</button>
          </div>
        )
      }
    })
    return component;
  }

  render() {
    return (
      <div className="wrapper-cards">
        { this.renderCards() }
      </div>
    )
  }
}
export default Card;
