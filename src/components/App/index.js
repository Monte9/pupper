import React, { Component } from 'react';
import classnames from 'classnames';

import RenderNavHeader from '../../shared/header'
import IntroToPupper from '../../shared/intro_to_pupper'
import PupperCard from '../../shared/pupper_card'
import Footer from '../../shared/footer'

import './style.css';

class App extends Component {
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <RenderNavHeader />
        <PupperCard />
        <PupperCard />
        <PupperCard />
        <PupperCard />
        <PupperCard />
        <PupperCard />
        <PupperCard />
        <PupperCard />
        <PupperCard />
        <PupperCard />
        <PupperCard />
        <Footer />
      </div>
    );
  }
}

export default App;
