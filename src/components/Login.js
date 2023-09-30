import React, { useState ,useRef} from 'react'
import Header from './Header'
import { checkValidaData } from '../utilis/validate';

const Login = () => {

const [isSignInForm,setIsSignInForm]=useState(true);

const email=useRef(null);
const password=useRef(null);

const handleButtonClick=()=>{
  //Validate the form data

console.log(email.current.value);
console.log(password.current.value);
 const massage=  checkValidaData(email.current.value,password.current.value);
  console.log(massage);
}

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

<form onSubmit={(e)=>e.preventDefault()}
 className='w-3/12 absolute p-12 bg-black my-36 
mx-auto right-0 left-0 text-white bg-opacity-60'>
<h1 className='font-bold text-3xl py-4'>
  {isSignInForm ? "Sign Up":"Sign In"}</h1>

  {  isSignInForm && (<input
     type='text' placeholder='Full Name '
      className='p-4 my-4 w-full bg-gray-700'/>
      )
      }

    <input 
    ref={email}
    type="text" placeholder='Email Address' 
    className='p-4 my-4 w-full bg-gray-700'/>



 

    <input
    ref={password}
     type='password' placeholder='Password'
      className='p-4 my-4 w-full bg-gray-700'/>


<button className='py-4 my-4 bg-red-600 w-full
 rounded-3xl' onClick={handleButtonClick}>{isSignInForm ? "Sign Up":"Sign In"}</button>


<p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
{isSignInForm ? "Already registered ? Sign In Now.. ":"New to Netflix ? Sign Up Now "
}</p>

</form>

</div>
  )
}

export default Login