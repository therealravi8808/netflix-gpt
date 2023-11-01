import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACK_GROUND_IMG } from '../utilis/constant'

const GptSearch = () => {
  return (
    <div>
         <div className='absolute -z-10'>
        <img src=
        // "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"

        {BACK_GROUND_IMG}

alt="logo"/>
</div> 
      <GptSearchBar/>
      <GptMovieSuggestion/>
      
    </div>
  )
}

export default GptSearch