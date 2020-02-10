import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PokeList from './components/PokeList'
import PokeStats from './components/PokeStats'
import './App.css'

function App () {
  return (
    <Router>
      <p>perro</p>
      <Switch>
        <Route path='/pokemon/:name' component={PokeStats} />
        <Route path='/'>
          <PokeList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
