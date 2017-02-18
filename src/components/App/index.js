import React, { Component } from 'react';
import classnames from 'classnames';

import RenderNavHeader from '../../shared/header'

import './style.css';

class App extends Component {
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <RenderNavHeader />
        <div className="Content">
          
        </div>
      </div>
    );
  }
}

export default App;
