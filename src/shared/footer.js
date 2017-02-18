import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import logo from './logo.png';

import './intro_to_pupper.css';

export default class IntroToPupper extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className="Footer-container">
        <div className="Footer-text-container">
          <p className="Text-container-text">Built with &#x2764; at TreeHacks 2017</p>
        </div>
      </div>
    )
  }
}
