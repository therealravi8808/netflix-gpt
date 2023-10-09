import React from 'react'
import Login from './Login'
import Browse from "./Browse"
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom' 
// import {  onAuthStateChanged } from "firebase/auth";
// import { auth } from '../utilis/firebase'
// import { useDispatch } from 'react-redux'
// import {addUser, removeUser} from '../utilis/userSlice';

const Body = () => {


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



  return (
    <div>
        <RouterProvider router={appRouter} />

    </div>
  )
}

export default Body