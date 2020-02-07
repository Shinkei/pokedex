import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PokeList from './components/PokeList'
import PokeStats from './components/PokeStats'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/pokemon/:name' component={PokeStats} />
        <Route path='/'>
          <PokeList />
        </Route>
        <Route>
          <p>Loading...</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
