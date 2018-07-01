import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import TMDB from './TMDB'
import FilmListing from './Film/FilmListing'
import FilmDetails from './Film/FilmDetails'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: null
    }
  }

  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />

        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <FilmListing films={this.state.films}
                         faves={this.state.faves}
                         apiKey={TMDB.api_key}
                         onFaveToggle={this.handleFaveToggle}
                         onDetailsClick={this.handleDetailsClick} />
          </div>

          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <FilmDetails film={this.state.current} />
          </div>
        </div>
      </div>
    );
  }

  handleFaveToggle(film) {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if (filmIndex > -1) {
      console.log('removing', film.title, 'from faves')
      // remove 1 item at index filmIndex
      faves.splice(filmIndex, 1)
    } else {
      console.log('adding', film.title, 'to faves')
      faves.push(film)
    }
    this.setState({faves})
  }

  handleDetailsClick(film) {
    console.log('fetching details for', film)

    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    console.log('url', url)

    fetch(url).then(response => {
      response.json().then(data => {
        console.log(data)
        this.setState({ current: data })
      })
    })
  }
}

export default App
