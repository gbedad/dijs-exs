import React from 'react';
import { useSelector } from 'react-redux';

function MovieDetails() {
    const movie = useSelector(state => state.movie)
    console.log(movie.payload);
  return (
    <div style={{width:"300px"}}>
        <h2>Movie</h2>
        <div style={{textAlign: 'left',marginLeft: '20px'}}>
            <p>Title: {movie.payload.title}</p>
            <p>Release Date: {movie.payload.releaseDate}</p>
            <p>Rating: {movie.payload.rating}</p>
        </div>

    </div>
  )
}

export default MovieDetails