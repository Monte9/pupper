import React, { Component } from 'react';
import classnames from 'classnames';

import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

import RenderNavHeader from '../../shared/header'
import './style.css';

export default class NotFound extends Component {
  // static defaultProps = {}
  // state = {}

  goHomeButton() {
    this.context.router.push('/profile');
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <RenderNavHeader />
        <div className="Notfound-app">
          <h2 className="Not-found-title">404, Not Found</h2>
          <button className="Go-home-link" onPress={this.goHomeButton.bind(this)}>
            <p>
              <FontAwesome
                name='arrow-left'
                size='1x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingRight: '10'}} />
              Go Home
            </p>
          </button>
        </div>
         <iframe id="theFrame" src="http://www.sanger.dk" style="width:100%;" frameborder="0"></iframe>
      </div>
    );
  }
}
