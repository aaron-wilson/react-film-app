import React from 'react'

const FilmPoster = props => (
  <img src={ `https://image.tmdb.org/t/p/w780${props.film.poster_path}` } alt="poster" />
)

export default FilmPoster
