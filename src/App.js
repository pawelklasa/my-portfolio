import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './styles/global.css';

import { Footer } from './components/footer.js';
import { Header } from './components/header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
            <Header />
            <div class="content">
                <h2>I am a <span class="highlight">Web Developer</span> with passion for <span class="highlight">UI</span> and <span class="highlight">UX</span> design. I work with global brands and startups to take new digital products and services to market.</h2>
            </div>
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
