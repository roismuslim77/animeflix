import React from 'react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/bootstrap3.css';
import '../../assets/css/aa.scss';

import Nav from '../components/nav';
import Cards from '../components/cardMovie';

export default class Movies extends React.Component{
  render(){
    return(
      <div className="bg-dark">
        <div>
          <Nav/>
        </div>
        <article className="card-post">
        <br></br><br></br><br></br>
          <div className="container">
            <div className="row">
              <Cards page={this.props.match.params.page}/>
            </div>
          </div>
        </article>
      </div>
    )
  }
}