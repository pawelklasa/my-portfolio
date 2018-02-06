import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    // eslint-disable-next-line
    Link
  } from 'react-router-dom';

import './styles/global.css';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Nav } from './components/nav';
import { Home } from './components/pages/home';
import { Work } from './components/pages/work';
import { Contact } from './components/pages/contact';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <div class="container">
                    <Header />
                    <Nav />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/work' component={Work} />
                    <Route exact path='/contact' component={Contact} />
                    <Footer />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
