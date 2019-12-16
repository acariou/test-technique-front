import './App.css';
import logo from './logo.svg';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movies from './containers/Movies';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Route path='/' name='Movies' component={ Movies }/>
      </div>
    </Router>
  );
}

export default App;
