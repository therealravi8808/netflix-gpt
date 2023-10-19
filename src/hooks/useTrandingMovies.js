import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constant";
import { addTrandingMovies } from "../utilis/moviesSlice";
import { useEffect } from "react";


const useTrandingMovies=()=>{

//fetch Data from TMBD API and updates store


const dispatch=useDispatch();

const getTrandingMovies=async()=>{
  const data=await fetch(
    'https://api.themoviedb.org/3/trending/all/day?page=1', 
  API_OPTIONS);
  const json=await data.json();

dispatch(addTrandingMovies(json.results));
}

useEffect(()=>{
getTrandingMovies();
},[])


}


export default useTrandingMovies;