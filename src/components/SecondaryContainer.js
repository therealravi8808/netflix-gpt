import React from 'react'
import MovieList from './MovieList'

import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
const movies=useSelector(store=>store.movies);

  return (
    <div>
<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

{
  /*
  MoviesList -Popular
   -MovieCard *n
  MovieList-Now Playing
  
  MovieList-Tranding
  
  MovieList-Hrror

  */
}


    </div>
  )
}

export default SecondaryContainer