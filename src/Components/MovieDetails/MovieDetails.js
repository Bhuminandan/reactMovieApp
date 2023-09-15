import React from 'react'

const MovieDetails = ({ selectedMovie }) => {
  return (
    <>
      <div className="movie-detailss flex flex-col items-start justify-start">
        <div className="movie-poster">
          <img src={selectedMovie.Poster} alt="img url" />
        </div>
        <div className="title text-2xl text-slate-400 font-bold">{selectedMovie.Title}</div>
        <div className="releaseYear text-xl font-semibold text-slate-500">{selectedMovie.Year}</div>
      </div>
    </>
  )
}

export default MovieDetails