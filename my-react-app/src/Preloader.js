// Preloader.js

import React, { Component } from 'react';
import './Preloader.css';

class Preloader extends Component {
  state = {
    showPreloader: true,
  };

  componentDidMount() {
    // Simulate a 10-second delay before hiding the preloader
    setTimeout(() => {
      this.setState({ showPreloader: false });
    }, 10000); // 10 seconds (10000 milliseconds)
  }

  render() {
    return (
      <div className={`preloader ${this.state.showPreloader ? 'visible' : 'hidden'}`}>
        <div className="custom-loader"></div>
      </div>
    );
  }
}

export default Preloader;
