import React from 'react'

const GptSearchBar = () => {
  return (
    <div>
      <form className='p-6 m-6 bg-black' >
  <input type='text' className='p-4 m-4 ' 
  placeholder='What would you like to watch today ?'/>
  <button className='py-2 px-4 bg-red-700 text-white rounded-lg'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar