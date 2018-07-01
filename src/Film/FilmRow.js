import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from '../Fave'

const FilmRow = props => (
  <div className="film-row" onClick={props.onDetailsClick}>
    <FilmPoster film={ props.film } />

    <div className="film-summary">
    	<div className="film-summary-text">
      	<h1>{ props.film.title }</h1>
      	<p>{ (new Date(props.film.release_date)).getFullYear() }</p>
      </div>
      <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
    </div>
  </div>
)

export default FilmRow
