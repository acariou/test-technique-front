import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './containers/Movies';
import Movie from './containers/Movie';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>
        <Switch>
          <Route path='/movie/:ref'>
            <Movie />
          </Route>
          <Route path='/'>
            <Movies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
