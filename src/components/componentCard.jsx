import React from 'react';



class Card extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      loading: true,
      episode: [],
      favorite: false
    };
  }

  componentDidMount(){
    fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
      .then( resp => resp.json())
        .then(data => {
          var i = data._embedded.episodes;
          i.map(element => 
            
            
            console.log('elements', element.id, element.name, element.image));
          // console.log (e);
          var cardEpisd = i.map((name, desc, image) => <div>Episode</div>)
          //console.log(cardEpisd);
          this.setState({
            loading: true,
            episode: [cardEpisd],
          })
    });

  }

  render (){
    var { loading, episode } = this.state;
    if (!loading){
      return <h2>Loading..</h2>
    }

    return(
      <div>
        <h1>Hola we xd</h1>

        <div>
          {episode.map(title => (
            <p key={title.id}>
              {title.summary}
            </p>
          ))}
        </div>

      </div>
    )
      
    
    
  }

}

export default Card;

