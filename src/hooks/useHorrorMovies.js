import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constant";
import { addHorrorMovies} from "../utilis/moviesSlice";
import { useEffect } from "react";


const useHorrorMovies=()=>{

//fetch Data from TMBD API and updates store


const dispatch=useDispatch();

const getHorrorMovies=async()=>{
  const data=await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?page=1', 
  API_OPTIONS);
  const json=await data.json();

dispatch(addHorrorMovies(json.results));
}

useEffect(()=>{
getHorrorMovies();
},[])


}


export default useHorrorMovies;