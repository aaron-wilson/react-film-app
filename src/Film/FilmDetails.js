import React from 'react'

const FilmDetails = props => {
  let details

  if (props.film) {
    const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`
    const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`

    details = (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropUrl} alt="" />
          <h1 className="film-title">{props.film.title}</h1>
        </figure>

        <div className="film-meta">
          <h2 className="film-tagline">{props.film.tagline}</h2>
          <p className="film-detail-overview">
            <img src={posterUrl} className="film-detail-poster" alt={props.film.title} />
            {props.film.overview}
          </p>
        </div>
      </div>
    )

  } else {
    details = (
      <div className="film-detail">
        <i className="material-icons">subscriptions</i>
        &nbsp;&nbsp;
        <span>No film selected</span>
      </div>
    )
  }

  return (
    <div>
      {details}
    </div>
  )
}

export default FilmDetails
