import React, { useEffect } from 'react'
import Login from './Login'
import Browse from "./Browse"
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom' 
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utilis/firebase'
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from '../utilis/userSlice';

const Body = () => {
const dispatch=useDispatch();


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/Browse",
        element:<Browse/>
    },

]);

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      

    } 
    else {
      
dispatch(removeUser());

    }
  });
},[]);

  return (
    <div>
        <RouterProvider router={appRouter} />

    </div>
  )
}

export default Body