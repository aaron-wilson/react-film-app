import React, { Component } from 'react'
import FilmRow from './FilmRow'

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.state = {
      filter: 'all',
    }
  }

  render() {
    const films = this.state.filter === 'faves' ?
      this.props.faves : this.props.films;

    const allFilms = films.map((film) => {
      let isFave = this.props.faves.includes(film) ? true : false;

      return (
        <FilmRow film={film}
                 key={film.id}
                 isFave={isFave}
                 onDetailsClick={this.props.onDetailsClick.bind(null, film)}
                 onFaveToggle={() => this.props.onFaveToggle(film)} />
      )

      /* onDetailsClick={() => this.props.onDetailsClick.bind(null, film)}

         Explanation: pass a prop called onDetailsClick to FilmRow with an
         anonymous function that holds a function called
         handleDetailsClick(film). The anonymous function is the return value
         from the bind() function. In the scope of handleDetailsClick(),
         because of bind(thisArg[, arg1, ...]), `this` will NOT be overwritten
         since `null` was passed. However, `this` is never used in
         handleDetailsClick(). Film is passed to handleDetailsClick() as the
         first argument. If you call bind with only 1 argument, you are only
         changing the `this` reference. */
    })

    return (
      <div>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
               onClick={ e => this.handleFilterClick('all') }>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
               onClick={ e => this.handleFilterClick('faves') }>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        <div className="film-rows">
          {allFilms}
        </div>
      </div>
    );
  }

  handleFilterClick(str) {
    console.log('setting filter to', str)
    this.setState({ filter: str })
  }
}

export default FilmListing
