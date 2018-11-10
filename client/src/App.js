import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/discussion-board/Main';
import Sidebar from './components/discussion-board/Sidebar';
import Footer from './components/Footer';

import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Sidebar />
          <Main />
          <Footer />
      </div>
    );
  }
}

export default App;
