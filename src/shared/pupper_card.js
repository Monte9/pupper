import React, { Component } from 'react';

import './pupper_card.css';

export default class PupperCard extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className="Pupper-card-wrapper">
        <div className="Pupper-card">
          <div className="Pupper-card-image">
            <img src="http://www.zdwired.com/wp-content/uploads/2014/04/cute-dogs-wallpaper.jpg"/>
          </div>
          <div className="Pupper-card-overlay">
            <p> Adopt me! </p>
            <p> hey there! </p>
          </div>
        </div>
      </div>
    )
  }
}
