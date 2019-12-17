import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movies from './containers/Movies';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>
        <Route path='/' name='Movies' component={ Movies }/>
      </div>
    </Router>
  );
}

export default App;
