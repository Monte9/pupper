import $ from 'jquery';

import React, { Component } from 'react';
import classnames from 'classnames';

import Webcam from 'react-webcam';
import { Button } from 'react-bootstrap';

import './style.css';

export default class Live extends Component {
  // static defaultProps = {}

  state = {
    screenshot: null,
    tab: 0
  }

  captureFrame() {
    var screenshot = this.refs.webcam.getScreenshot();
    this.setState({screenshot: screenshot});

    $.post('/process_image', {image: screenshot})
      .then((data) => {
        console.log(data)
      });
  }

  componentDidMount(){
      setInterval(this.captureFrame.bind(this), 3000);
  }

  render() {
    const { className, ...props } = this.props;

    return (
      <div>
        <div className="Live-container">
          <h1>LIVE</h1>
        </div>
        <p className="Live-app-intro">
          <Webcam className="webcam" ref='webcam' />
        </p>
        { this.state.screenshot && (
          <p className="Live-app-screenshot">
            <img src={this.state.screenshot} role="presentation"/>
          </p>
        )}
      </div>
    );
  }
}
