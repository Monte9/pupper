import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './pupper_card.css';

export default class PupperCard extends Component {
  render() {
    const { className, ...props } = this.props;
    const customStyle = ((this.props.love_score > 0) ? "visible" : "hidden");
    return (
      <div className="Pupper-card-wrapper">
        <div className="Pupper-card">
          <div className="Pupper-card-image">
            <img src={this.props.source} className="Pupper-card-image-source" alt="logo" role="presentation"/>
          </div>
          <div className="Pupper-card-overlay" style={{visibility: customStyle}}>
          <div className="Pupper-card-overlay-text">
            <br/>
            <br/>
            <p className="icon"><FontAwesome
               name='heart-o'
               size='5x'
               style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingTop: '10'}}
             /></p>
            <p> Adopt one like me today!</p>
            <a href="http://www.sanger.dk/" target="_blank">Search for <strong>breed</strong> near <strong>Location</strong> <FontAwesome
               name='arrow-circle-right'
               size='1x'
               style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingTop: '10'}}
             /></a>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
