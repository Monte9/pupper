import React, { Component } from 'react';
import classnames from 'classnames';

import RenderNavHeader from '../../shared/header'

import './style.css';

export default class Matches extends Component {
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Matches', className)} {...props}>
        <RenderNavHeader />
        <div className="Content">

        </div>
      </div>
    );
  }
}
