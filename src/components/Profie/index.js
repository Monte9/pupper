import React, { Component } from 'react';
import classnames from 'classnames';

import RenderNavHeader from '../../shared/header'

import './style.css';

export default class Profie extends Component {
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Profile', className)} {...props}>
        <RenderNavHeader />
        <div className="Content">

        </div>
      </div>
    );
  }
}
