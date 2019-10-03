function Episodes() {
  fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
    .then(resp => resp.json())
    .then(data => {
      var i = data._embedded.episodes;
      console.log(data._embedded.episodes);
      i.forEach(element => console.log(element));
      // console.log (e);
    })
}
Episodes();