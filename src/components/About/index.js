import React, { Component } from 'react';
import classnames from 'classnames';

import { Button } from 'react-bootstrap';

import './style.css';

export default class About extends Component {
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <div className="App-header">
          <h2>About ok cool</h2>
        </div>
        <p className="App-intro">
          <Button bsStyle="success">Success</Button>
        </p>
      </div>
    );
  }
}
