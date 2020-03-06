import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokeList from "./components/PokeList";
import PokeStats from "./components/PokeStats";
import PokeHeader from "./components/PokeHeader";
import "./App.css";

function App() {
  return (
    <Router>
      <PokeHeader />
      <div className="nes-container main-content">
        <Switch>
          <Route path="/pokemon/:name" component={PokeStats} />
          <Route path="/">
            <PokeList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
