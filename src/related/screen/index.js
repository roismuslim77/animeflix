import React from 'react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/bootstrap3.css';
import '../../assets/css/aa.scss';
import Nav from '../component/nav';
import Cards from '../component/cardRelate';

export default class Recent extends React.Component{
  render(){
    return(
      <div className="bg-dark">
        <div>
          <Nav genre={this.props.match.params.genre}/>
        </div>
        <article className="card-post">
        <br></br><br></br><br></br>
          <div className="container">
            <div className="row">
              <Cards genre={this.props.match.params.genre} page={this.props.match.params.page}/>
            </div>
          </div>
        </article>
      </div>
    )
  }
}