import React from 'react'

const Card = ({ imgUrl, movieTitle, releaseYear, id, setSelectedMovie }) => {
    return (
        <div className="single-card w-80 mt-4 mb-5 h-auto px-6 hover:scale-105 duration-300 transition-all cursor-pointer"
            onClick={() => setSelectedMovie(id)}
        >
            <div className="poster rounded-lg overflow-hidden">
                <img
                    src={imgUrl}
                    alt="movie-poster"
                    className='movieimg w-full h-80 object-cover'
                />
            </div>
            <div className="movie-details w-full text-white mt-3">
                <div className="movie-title text-xl font-semibold text-slate-300">{movieTitle}</div>
                <div className="movie-year text-slate-500 font-medium">{releaseYear}</div>
            </div>
        </div>
    )
}

export default Card