import React, { Component } from 'react'

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>
  }

  render() {
    // const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        {<ul>
          {!this.props.dogBreeds ? 'Loading...' : this.props.dogBreeds.map(this.renderDogBreed)}
        </ul>}
      </div>
    )
  }
}