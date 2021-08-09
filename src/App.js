import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context'

import './App.css';
import Navbar from './components/layouts/Navbar'
import Index from './components/layouts/Index'
import Lyrics from './components/tracks/Lyrics'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
            <Navbar />  
            <div className="container">
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/lyrics/track/:id" exact component={Lyrics} />
              </Switch>
            </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
