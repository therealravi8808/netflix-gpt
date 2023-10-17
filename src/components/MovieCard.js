import React from 'react'
import { IMG_CDN_URL } from '../utilis/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
        <img alt="Movie Card" 
        src={IMG_CDN_URL+posterPath}
        />
    </div>
  )
}

export default MovieCard