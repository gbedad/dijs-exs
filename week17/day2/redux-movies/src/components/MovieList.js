import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectMovie } from '../actions';


function MovieList() {
  const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Movie List</h2>
        {movies.map((movie, index) => {
           return (
           <div key={index} style={{display:"flex", justifyContent:"space-between", width:"300px"}}>
                <span>{movie.title}</span><button onClick={(e)=> dispatch({type: 'MOVIE_SELECTED', payload:selectMovie(movies[index])})}>Select</button>
            </div>
            )
        })}
    </div>
  )
}

export default MovieList