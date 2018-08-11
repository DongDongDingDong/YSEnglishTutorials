import React, { Component } from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import VideoTutorials from './components/VideoTutorials';
import About from './components/About';
import Navbar from './components/CustomNavBar';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/VideoTutorials" component={VideoTutorials} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
