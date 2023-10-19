import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{

        nowPlayingMovies:null,
        trailerVideo:null,
    },
    
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrandingMovies:(state,action)=>{
            state.trandingMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies=action.payload;
        },
        addTopRatingMovies:(state,action)=>{
            state.topRatingMovies=action.payload;
        },
        addHorrorMovies:(state,action)=>{
            state.horrorMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
           state.trailerVideo=action.payload;
        },
    },
});


export  const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrandingMovies,
addUpcomingMovies,addTopRatingMovies,addHorrorMovies}=moviesSlice.actions;
export default moviesSlice.reducer;