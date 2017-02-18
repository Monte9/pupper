import React, { Component } from 'react';

import './pupper_card.css';

export default class PupperCard extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className="Pupper-card-wrapper">
        <div className="Pupper-card">
          <div className="Pupper-card-header">
            <h2 className="Pupper-card-header-title">{this.props.title}</h2>
          </div>
          <div className="Pupper-card-image">
            <img src={this.props.source} className="Pupper-card-image-source" alt="logo" role="presentation"/>
          </div>
        </div>
      </div>
    )
  }
}
