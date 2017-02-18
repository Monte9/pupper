import React, { Component } from 'react';

import logo from './logo.png';

import './intro_to_pupper.css';

export default class IntroToPupper extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className="Container">
        <div className="Text-container">
          <p className="Text-container-text">Scroll down to browse some of our puppies. We'll let you know when you find your match!</p>
        </div>
      </div>
    )
  }
}
