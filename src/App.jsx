
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './assets/Header';
import './App.css'
import Sidebar from './assets/Sidebar';
import Home from './assets/Home';
import Charts from './assets/Charts';
import Map from './assets/Map';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/charts" component={Charts} />
          <Route path="/map" component={Map} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
