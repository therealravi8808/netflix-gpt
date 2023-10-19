import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constant";
import {  addTopRatingMovies } from "../utilis/moviesSlice";
import { useEffect } from "react";


const useTopRatingMovies=()=>{

//fetch Data from TMBD API and updates store


const dispatch=useDispatch();

const getTopRatingMovies=async()=>{
  const data=await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?page=1', 
  API_OPTIONS);
  const json=await data.json();

dispatch(addTopRatingMovies(json.results));
}

useEffect(()=>{
getTopRatingMovies();
},[])


}


export default useTopRatingMovies;