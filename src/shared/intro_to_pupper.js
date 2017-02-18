import React, { Component } from 'react';

import logo from './logo.png';

import './intro_to_pupper.css';

export default class IntroToPupper extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className="Container">
        <div className="Intro-logo-container">
          <img src={logo} className="Intro-app-logo" alt="logo" role="presentation"/>
        </div>
        <div className="Text-container">
          <p className="Text-container-text">Scroll down to browse some of our puppies, we'll let you know when you find your match!</p>
        </div>
      </div>
    )
  }
}
