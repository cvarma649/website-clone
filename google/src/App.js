import React from 'react';
import './App.css';
import Home from "./home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import {useState} from "react";
import SearchPage from "./SearchPage"

function App() {
  const [user, setUser]= useState(null);

  return (
    //BEM
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <h1>{user ? `The user logged in is ${user}`: "No user is logged in"}</h1>
            <Login setUser={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
