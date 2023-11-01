import React, { useState ,useRef} from 'react'
import Header from './Header'
import { checkValidaData } from '../utilis/validate.js';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utilis/firebase";
import{BG_LOGIN_URL, USER_AVATAR} from "../utilis/constant";
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userSlice';

const Login = () => {


  const name=useRef(null)
const [isSignInForm,setIsSignInForm]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);

const dispatch=useDispatch();

const email=useRef(null);
const password=useRef(null);

const handleButtonClick=()=>{
  //Validate the form data


 const message=  checkValidaData(email.current.value,password.current.value);
 setErrorMessage(message);

 if(message) return;
 //Sign In Sign Up Logic
 
 if(!isSignInForm){
//Sign UP logic
createUserWithEmailAndPassword(
  auth,
   email.current.value,
   password.current.value
   )
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
       photoURL: USER_AVATAR
    }).then(() => {
      
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(
        addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        })
        );
    }).catch((error) => {
     setErrorMessage(error.message); 
    });
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });


 }
 else{
//Sign In logic
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });


 }


 




}

const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm);
}

  return (
    
    <div>
        <Header/>
        <div className='absolute'>
        <img src=
        {BG_LOGIN_URL}
alt="logo"/>
</div> 

<form onSubmit={(e)=>e.preventDefault()}
 className='w-3/12 absolute p-12 bg-black my-36 
mx-auto right-0 left-0 text-white bg-opacity-60'>
<h1 className='font-bold text-3xl py-4'>
  {isSignInForm ?"Sign In": "Sign Up"}</h1>

  {  !isSignInForm && (<input
  useRef={name}
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

<p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

<button className='py-4 my-4 bg-red-600 w-full
 rounded-3xl' onClick={handleButtonClick}>
  {isSignInForm ? "Sign In":"Sign Up"}</button>


<p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
{isSignInForm ? "New to Netflix ? Sign Up Now ":"Already registered ? Sign In Now.. "
}</p>

</form>

</div>
  )
}

export default Login