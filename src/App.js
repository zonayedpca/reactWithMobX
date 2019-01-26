import React, { Component } from 'react';
import './App.css';

import store from './store';

import Header from './components/Header';
import Control from './components/Control';
import TableView from './components/TableView';
import HighPrice from './components/HighPrice';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Control store={store} />
        <TableView store={store} />
        <HighPrice store={store} />
        <Footer />
      </div>
    );
  }
}

export default App;
