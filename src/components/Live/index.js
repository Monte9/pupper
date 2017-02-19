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
        console.log("POST Req success")
        console.log(data)
      });
  }

  componentDidMount(){
      setInterval(this.captureFrame.bind(this), 1000);
  }

  render() {
    const { className, ...props } = this.props;

    console.log("This is the state below")
    console.log(this.state)

    return (
      <div className={classnames('App', className)} {...props}>
        <div className="Live-container">
        </div>
        <p className="App-intro">
          <Webcam className="webcam" ref='webcam' />
        </p>
        { this.state.screenshot && (
          <p className="App-Screenshot">
            <img src={this.state.screenshot} role="presentation"/>
          </p>
        )}
      </div>
    );
  }
}
