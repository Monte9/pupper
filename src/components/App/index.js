import $ from 'jquery';

import React, { Component } from 'react';
import classnames from 'classnames';

import RenderNavHeader from '../../shared/header'
import IntroToPupper from '../../shared/intro_to_pupper'
import PupperCard from '../../shared/pupper_card'
import Footer from '../../shared/footer'
import Live from '../Live/index'
import Webcam from 'react-webcam';

import './style.css';

class App extends Component {
  // static defaultProps = {}
  // state = {}
    state = {
      screenshot: null,
      joy: false,
      joy_likelihood : null,
      anger: false,
      anger_likelihood: null,
      sorrow: false,
      sorrow_likelihood: null,
      surprise: false,
      surprise_likelihood: null,
      love_score: 0,
      tab: 0

    }

  componentDidMount() {
    console.log("hi there");
    this.getPupperImages();
    this.getMatchingAdoptablePuppers();
    setInterval(this.captureFrame.bind(this), 3000);
  }

  getPupperImages() {
    return $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token=4666482734.0fc13c6.3850da1a14074073bef374f9cbfcd3c7&callback=?')
      .then((data) => {
        this.setState({ puppers: data.data });
      });
  }

  getMatchingAdoptablePuppers() {
    var url = 'http://api.petfinder.com/pet.getRandom?key=7df0fb48f5f60ad6bd360c74f25b0f17&location=94020&breed=pug&output=full&format=json';
    $.ajax({
        type : 'GET',
        data : {},
        url : url+'&callback=?' ,
        dataType: 'json',
        success : function(data) {
            console.log(data.petfinder.pet.name);
        },
        error : function(request,error)
        {
            alert("Request: "+ JSON.stringify(request));
        }
    });
  }

  renderPuppers() {
    console.log(this.state)
    if(this.state.puppers) {
      return (
        this.state.puppers.map((puppy, index) => {
          return (
            <PupperCard key={puppy.id} source={puppy.images.standard_resolution.url} visible={this.state.love_score}/>
          )
        })
      )
    }
  }

  vz_b(input) {
     if(input) {
         return 1;
     }
     return 0;
  }

  vz(string){
      switch (string) {
          case "VERY_UNLIKELY":
            return -2;
          case "UNLIKELY":
            return -1;
          case "POSSIBLE":
            return 0;
          case "LIKELY":
            return 1;
          case "VERY_LIKELY":
            return 2;
          default:

      }
  }

  captureFrame() {
    var screenshot = this.refs.webcam.getScreenshot();
    this.setState({screenshot: screenshot});

    $.post('/process_image', {image: screenshot})
      .then((data) => {
        // PARSE THE data
        const joy = data[0][0].joy;
        const anger = data[0][0].anger;
        const sorrow = data[0][0].sorrow;
        const surprise = data[0][0].surprise;
        const joy_likelihood = data[1].responses[0].faceAnnotations[0].joyLikelihood;
        const anger_likelihood = data[1].responses[0].faceAnnotations[0].angerLikelihood;
        const sorrow_likelihood = data[1].responses[0].faceAnnotations[0].sorrowLikelihood;
        const surprise_likelihood = data[1].responses[0].faceAnnotations[0].surpriseLikelihood;
        this.setState({joy});
        this.setState({joy_likelihood});
        this.setState({anger});
        this.setState({anger_likelihood});
        this.setState({sorrow});
        this.setState({sorrow_likelihood});
        this.setState({surprise});
        this.setState({surprise_likelihood});
        const love_score = 2*this.vz_b(joy)+2*this.vz_b(surprise)-2*this.vz_b(anger)+1*this.vz_b(sorrow)+this.vz(joy_likelihood)-this.vz(anger_likelihood)+1.5*this.vz(surprise_likelihood)+0.5*this.vz(sorrow_likelihood);
        console.log("Love Score: "+love_score);
        this.setState({love_score});
      });
  }


  renderCamera() {
    const { className, ...props } = this.props;
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

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <RenderNavHeader />
        {this.renderPuppers()}
        {this.renderCamera()}
        <Footer />
      </div>
    );
  }
}

export default App;
