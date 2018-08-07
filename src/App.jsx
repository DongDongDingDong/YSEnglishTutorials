import React, { Component } from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import VideoTutorials from './components/VideoTutorials';
import News from './components/News';
import Navbar from './components/CustomNavBar';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/VideoTutorials" component={VideoTutorials} />
          <Route exact path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
