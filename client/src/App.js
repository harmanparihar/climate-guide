import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

import './css/style.css';
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
