import useHorrorMovies from '../hooks/useHorrorMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatingMovies from '../hooks/useTopRatingMovies';
import useTrandingMovies from '../hooks/useTrandingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer  from './mainContainer';


const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTrandingMovies();
useUpcomingMovies();
useTopRatingMovies();
useHorrorMovies();

  return (
    <div>
      <Header/>
      <GptSearch/>
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