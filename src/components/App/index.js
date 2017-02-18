import $ from 'jquery';

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

  componentDidMount() {
    this.getPupperImages();
  }

  getPupperImages() {
    return $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token=4666482734.0fc13c6.3850da1a14074073bef374f9cbfcd3c7&callback=?')
      .then((data) => {
        this.setState({ puppers: data.data });
      });
  }

  renderPuppers() {
    if(this.state) {
      return (
        this.state.puppers.map((puppy, index) => {
          return (
            <PupperCard key={puppy.id} source={puppy.images.standard_resolution.url}/>
          )
        })
      )
    }
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <RenderNavHeader />
        {this.renderPuppers()}
        <Footer />
      </div>
    );
  }
}

export default App;
