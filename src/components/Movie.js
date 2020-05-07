import React from 'react'

const Movie = (props) => {
  const { title, director, year, poster } = props
  return (
    <div className="movie">
      <img src={poster} alt={title} loading="lazy" />
      <h3>{title}</h3>
      <div>{director}</div>
      <div>{year}</div>
    </div>
  )
}

Movie.defaultProps = {
  title: 'Movie title',
  director: 'Director',
  year: '2020',
  poster: 'https://via.placeholder.com/250x360.png',
  imdbID: 0
}

export default Movie
