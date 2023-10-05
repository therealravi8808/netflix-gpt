import React, { useEffect } from 'react'
import Login from './Login'
import Browse from "./Browse"
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom' 
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utilis/firebase'
import { useDispatch } from 'react-redux'


const Body = () => {
const dispatch=useDispatch()

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
      const {uid,email,displayName} = user;
      


    } else {
      


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