import React, { useState ,useRef} from 'react'
import Header from './Header'
import { checkValidaData } from '../utilis/validate.js';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utilis/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userSlice';

const Login = () => {


  const name=useRef(null)
const [isSignInForm,setIsSignInForm]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);
const navigate=useNavigate();
const dispatch=useDispatch();

const email=useRef(null);
const password=useRef(null);

const handleButtonClick=()=>{
  //Validate the form data

// console.log(email.current.value);
// console.log(password.current.value);
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
       photoURL: "https://avatars.githubusercontent.com/u/87171097?v=4"
    }).then(() => {
      
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      
      navigate("/browse");
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
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
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
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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
 rounded-3xl' onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>


<p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
{isSignInForm ? "New to Netflix ? Sign Up Now ":"Already registered ? Sign In Now.. "
}</p>

</form>

</div>
  )
}

export default Login