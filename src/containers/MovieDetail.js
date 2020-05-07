import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState()

  useEffect(
    () => {
      fetch(`http://www.omdbapi.com/?apikey=1e495772&i=${movieId}&type=movie`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setMovie(response)
        })
    }
    , [movieId]
  )
  return (
    <div className="detail">
      <Link className="button" to="/">Back</Link>
      <h2>{movie?.Title}</h2>
      <div>{movie?.Director}</div>
      <div>{movie?.Year}</div>
      <div>{movie?.imdbRating}</div>
      <p>{movie?.Plot}</p>
      <img src={movie?.Poster} alt={movie?.Title} />
    </div>
  )
}

export default MovieDetail
