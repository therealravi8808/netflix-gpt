import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer  from './mainContainer';


const Browse = () => {
useNowPlayingMovies();
usePopularMovies();

  return (
    <div>
      <Header/>
     <MainContainer/>
     <SecondaryContainer/>
      
      {
        /*
        Main Container
         -VideoBackground
         -Video Titels
        Secondary Container
         - MoviesList *n
           - Card *n



        */

      }
    </div>
  )
}

export default Browse;