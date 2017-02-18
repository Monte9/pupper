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
    return $.getJSON('https://www.googleapis.com/customsearch/v1?q=puppy&num=10&imgSize=medium&searchType=image&key=AIzaSyCS4QZroUUPxWbvcZOhfnkzGyXFXJnZ26I&cx=006110433430620454490%3A1jkort_cgf4')
      .then((data) => {
        this.setState({ puppers: data.items });
      });
  }

  renderPuppers() {
    if(this.state) {
      return (
        this.state.puppers.map((puppy, index) => {
          return (
            <PupperCard key={puppy.htmlTitle} title={puppy.title} source={puppy.link}/>
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
