import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Search from './containers/Search'
import MovieDetail from './containers/MovieDetail'


function App () {
  return (
    <div className="App">
      <h1>Som Movies!</h1>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="/:movieId">
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
