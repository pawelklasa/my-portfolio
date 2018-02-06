import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './styles/global.css';

import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Content } from './components/content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
            <Header />
            <Content />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
