import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer=()=>{
  const movies=useSelector(store=>store.movies?.nowPlayingMovies);

  if(movies==null) return;
const mainMovie=movies[0];
console.log(mainMovie);

    return <div>
       <VideoTitle/>
       <VideoBackground/>



    </div>;
};
export default MainContainer;