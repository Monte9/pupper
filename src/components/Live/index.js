import React, { Component } from 'react';
import classnames from 'classnames';

import Webcam from 'react-webcam';
import { Button } from 'react-bootstrap';

import RenderNavHeader from '../../shared/header'

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
  }

  render() {
    const { className, ...props } = this.props;

    console.log("This is the state below")
    console.log(this.state)

    return (
      <div className={classnames('App', className)} {...props}>
        <RenderNavHeader />
        <div className="Live-container">
          <h2>LIVE</h2>
        </div>
        <p className="App-intro">
          <Webcam className="webcam" ref='webcam' />
        </p>
        <p className="App-button">
          <Button bsStyle="primary" bsSize="large" onClick={this.captureFrame.bind(this)}>Capture</Button>
        </p>
        { this.state.screenshot && (
          <p className="App-Screenshot">
            <h3 className="App-Screenshot-Title">Screenshot</h3>
            <img src={this.state.screenshot} role="presentation"/>
          </p>
        )}
      </div>
    );
  }
}
