import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACK_GROUND_IMG } from '../utilis/constant'

const GptSearch = () => {
  return (
    <div>
         <div className='absolute -z-10'>
        <img src=
       
        {BACK_GROUND_IMG}

alt="logo"/>
</div> 
      <GptSearchBar/>
      <GptMovieSuggestion/>
      
    </div>
  )
}

export default GptSearch