import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

const [isSignInForm,setIsSignInForm]=useState(true);

const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm);
}

  return (
    
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
alt="logo"/>
</div> 

<form className='w-3/12 absolute p-12 bg-black my-36 
mx-auto right-0 left-0 text-white bg-opacity-60'>
<h1 className='font-bold text-3xl py-4'>
  {isSignInForm ? "Sign In":"Sign Up"}</h1>

  {  isSignInForm && (<input
     type='text' placeholder='Full Name '
      className='p-4 my-4 w-full bg-gray-700'/>
      )
      }

    <input 
    type="text" placeholder='Email Address' 
    className='p-4 my-4 w-full bg-gray-700'/>



 

    <input
     type='password' placeholder='Password'
      className='p-4 my-4 w-full bg-gray-700'/>


<button className='py-4 my-4 bg-red-600 w-full
 rounded-3xl'>{isSignInForm ? "Sign In":"Sign Up"}</button>


<p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
{isSignInForm ? "New to Netflix ? Sign In Now ":
"Already registered ? Sign Up Now.. "}</p>

</form>

</div>
  )
}

export default Login