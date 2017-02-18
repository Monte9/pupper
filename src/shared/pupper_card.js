import React, { Component } from 'react';

import './pupper_card.css';

export default class PupperCard extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className="Pupper-card-wrapper">
        <div className="Pupper-card">
          <div className="Pupper-card-header">
            <h2 className="Pupper-card-header-title">Sample Pupper</h2>
          </div>
          <div className="Pupper-card-image">
            <img src="http://www.zdwired.com/wp-content/uploads/2014/04/cute-dogs-wallpaper.jpg" className="Pupper-card-image-source" alt="logo" role="presentation"/>
          </div>
        </div>
      </div>
    )
  }
}
