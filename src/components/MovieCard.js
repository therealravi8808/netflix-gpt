import React from 'react'
import { IMG_CDN_URL } from '../utilis/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img alt="Movie Card" 
        src={IMG_CDN_URL+posterPath}
        />
    </div>
  )
}

export default MovieCard