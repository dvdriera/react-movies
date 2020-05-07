import React from 'react'
import { Link } from 'react-router-dom'
import Movie from './Movie'

const MovieList = ({ movies = [] }) => {
  return (
    <div className="movies">
      {
        movies.map(movie => (
          <Link to={`/${movie.imdbID}`}>
            <Movie
              key={movie.imdbID}
              title={movie.Title}
              director={movie.Director}
              year={movie.Year}
              poster={movie.Poster}
            />
          </Link>
        ))
      }
    </div>
  )
}

export default MovieList
