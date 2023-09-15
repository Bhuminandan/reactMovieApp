import './App.css';
import React, { useState } from 'react';
import Card from './Components/Card/Card';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {

  const [moviesData, setMoviesData] = useState(null)
  const [searchedInput, setSearchedInput] = useState('marvel');
  const [selectedMovie, setSelectedMovie] = useState(null)

  function handleSearchedInput(e) {
    setSearchedInput(e.target.value);
  }


  async function showMovies() {
    try {
      let url = `https://www.omdbapi.com/?s=${searchedInput}&apikey=85b294b3`;
      let res = await fetch(url);
      let data = await res.json();
      setMoviesData(data.Search);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="main w-screen h-auto flex flex-col items-center justify-start min-h-screen bg-slate-900">

        {/* Search Bar and Input bar */}
        <div className="search-items-div w-5xl h-auto mt-7 flex flex-col px-6 items-center justify-center gap-4">
          <h1 className='heading text-5xl h-auto overflow-hidden text-slate-500 font-bold'>Movie's Details App</h1>
          <div className="search w-full h-auto py-3 flex flex-col items-center justify-center gap-5">
            <input type="text"
              placeholder='Search by movie name...'
              className='w-full outline-none bg-slate-800 h-10 px-4 py-2 text-white rounded-lg'
              onChange={(e) => handleSearchedInput(e)}
            />
            <button
              className="search-btn w-full h-auto md:w-2/4 bg-slate-200 rounded-xl 
          cursor-pointer py-2 hover:bg-slate-200 duration-300 
          transition-all active:transform active:translate-y-1"
              onClick={showMovies}
            >
              Search
            </button>
          </div>
        </div>

        {/* Cards Container */}

        <div className="movie-container flex items-start justify-start gap-20">

          <div className="cards-container w-3/4 h-auto mt-16 flex flex-wrap items-center justify-center md:items-start md:px-28 md:justify-start gap-2">
            {
              moviesData && moviesData.map((singleMovieData, index) => {
                return (
                  <Card
                    imgUrl={singleMovieData.Poster}
                    movieTitle={singleMovieData.Title}
                    releaseYear={singleMovieData.Year}
                    id={index}
                    setSelectedMovie={setSelectedMovie}
                  />
                )
              })
            }
          </div>

          <div className="movie-details w-1/5 mt-20">
            {
              selectedMovie &&
              <MovieDetails
                selectedMovie={moviesData[selectedMovie]}
              />
            }
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
