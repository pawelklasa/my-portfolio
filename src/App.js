import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import './styles/global.css';

import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Home } from './components/home.js';
import { Nav } from './components/nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
            <Header />
            <Nav />
            <Home />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
