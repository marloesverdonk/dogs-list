import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages(props) {
  const { images } = props
  return (
    <div className='dog-breed-images'>
      <h1>Dog Breed Images</h1>

      <p> Here are some pictures of the {props.breed}</p>

      <Link to='/'>Go back to the index</Link>
      <div>
        {images && images.map(url => <img src={url} alt="Dog" />)}
        {!images && 'Loading...'}
      </div>


    </div>
  )
}