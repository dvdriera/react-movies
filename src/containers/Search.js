import React, { useState } from 'react'

import MovieList from '../components/MovieList'
import { Movies } from '../services/Movies'

const Search = () => {
  const [keyword, setKeyword] = useState()
  const [isSearching, setSearching] = useState(false)
  const [results, setResults] = useState(Movies)

  const handleChange = event => {
    console.log(event.target.value)
    setKeyword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(`search: ${keyword}`)
    search()
  }

  const search = () => {
    setSearching(true)
    fetch(`http://www.omdbapi.com/?apikey=1e495772&s=${keyword}&type=movie`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setSearching(false)
        setResults(response?.Search)
      })
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your favorite movie" onChange={handleChange} value={keyword} />
        <input type="submit" value="Search" />
      </form>
      { isSearching &&
        <h3>Searching....</h3>
      }
      { (!isSearching && !results)
        ? <h3>Results not found :(</h3>
        : <div className="movies">
          <MovieList movies={results} />
        </div>
      }
    </div>
  )
}

export default Search
