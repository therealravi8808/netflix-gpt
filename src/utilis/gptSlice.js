import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieName: null,
    movieResults: null,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addGptMovieResult: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName;
      state.movieResults = movieResults;
    },
    // addGptMovieResult:(state,action)=>{
    //     state.gptMovies=action.payload;

    // }
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
