import React, { Component } from 'react';

import Navbar from './components/Navbar';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
