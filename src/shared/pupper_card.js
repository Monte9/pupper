import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './pupper_card.css';

export default class PupperCard extends Component {
  renderPetInfo() {
    if(this.props.lucky_pet) {
      if(this.props.lucky_pet.contact.phone.$t === undefined) {
        return `Find my buddy ${this.props.lucky_pet.name.$t} in Palo Alto`
      } else {
        return `Call my friend ${this.props.lucky_pet.name.$t} at ${this.props.lucky_pet.contact.phone.$t}`
      }
    }
  }

  render() {
    const { className, ...props } = this.props;
    const customStyle = ((this.props.visible > 0) ? "visible" : "hidden");

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
            <p>Want to adopt a cutie like me?</p>
            <a href="http://www.sanger.dk/" target="_blank">{this.renderPetInfo()}<FontAwesome
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
