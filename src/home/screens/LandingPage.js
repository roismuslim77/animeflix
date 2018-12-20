import React, {Component} from 'react';
import {connect} from 'react-redux';

import Nav from '../components/nav/index';
// import Cards from '../components/cards/cardAnime'
import CardAll from '../components/cards/cardAll';
import Carousel from '../components/carousel'

class LandingPage extends Component{
  render(){
    return(
      <div>
        <div>
          <Nav/>
        </div>
        <Carousel/>
        <article className="card-post">
          <div className="container">
            <h3 style={{marginTop:10}}>Popular</h3>
            <div className="row">
              <CardAll typeList='Pop'/>
            </div>
          </div>
          <div className="container">
            <h3 style={{marginTop:10}}>Top All</h3>
            <div className="row">
              <CardAll typeList='Top'/>
            </div>
          </div>
          <div className="container">
            <h3 style={{marginTop:10}}>Movie All</h3>
            <div className="row">
              <CardAll typeList='Movie'/>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default LandingPage;