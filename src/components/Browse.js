import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer  from './mainContainer';


const Browse = () => {
useNowPlayingMovies();

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