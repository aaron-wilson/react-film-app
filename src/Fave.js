import React, { Component } from 'react'

class Fave extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = { }
  }

  render() {
    const isFave = this.props.isFave ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div className={ `film-row-fave ${isFave}` } onClick={ e => this.handleClick(e) }>
        <span className="material-icons">{ isFave }</span>
      </div>
    );
  }

  handleClick(e) {
    e.stopPropagation()
    if (this.props.env === 'dev') console.log('handling Fave click')
    this.props.onFaveToggle()
  }
}

export default Fave
