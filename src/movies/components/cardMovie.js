import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';

import {movieAll, detailsVid} from '../../redux/actions/getAnime';

class Cards extends React.Component{
  base_url = 'https://animeapp1.herokuapp.com/api'

  constructor(){
    super();
    this.state ={
        page: 1
    }
}

  addDetails(id){
    this.props.dispatch(detailsVid(id)) 
  }

  componentDidMount(){
    var strPage = this.props.page
    var pageInt = parseInt(strPage)
    pageInt ++
    this.setState({page: pageInt})
    this.getContent()
  }

  getContent(){
    this.props.dispatch(movieAll(this.props.page))
  }

  render(){
    return (
      this.props.cardMovie.isLoading === true ? 
      <LoadingOverlay 
      active={this.props.cardMovie.isLoading}
      spinner/> : this.cardMov()
    )
  }

  cardMov(){
    console.log(this.props.cardMovie.cardMovie)
    return(
  <div>
      <div>
        {this.props.cardMovie.cardMovie.map((item,key)=>
          <div className="movie-card">
          <Link to={'/movies/details/'+ item.detailAnime.title} onClick={()=>this.addDetails(item.detailAnime.id)}>
            <img className="movie-header" src={item.detailAnime.thumbnail} style={{backgroundSize:'cover'}}/>
            <div className="movie-content">
              <div className="movie-info">
                <div className="info-section">
                  <label>Status</label>
                  <span>{item.detailAnime.status}</span>
                </div>
                <div className="info-section">
                  <label>Views</label>
                  <span>{item.detailAnime.view}</span>
                </div>
                <div className="info-section">
                  <label>Score</label>
                  <span>{item.detailAnime.score}</span>
                </div>
              </div>
            </div>
          </Link>
          </div>
        )}
        </div>
        {/*page*/}
        <div style={{marginTop: '1%'}}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container">
            <a className="navbar-brand" onClick={()=>{
                  if(this.state.page > 1){
                      this.setState({page: this.state.page-1})
                      this.getContent()
                  } else{
                    this.setState({page: this.state.page})
                      this.getContent()
                  }
              }}>
              <Link to={'/movies/'+this.state.page}><b className="glyphicon glyphicon-menu-left"></b></Link>
              </a>
              <a className="navbar-brand" onClick={()=>
                  {
                    this.setState({page: this.state.page+1})
                    this.getContent()
                  }
                }>
              <Link to ={'/movies/'+this.state.page}><b className="glyphicon glyphicon-menu-right"></b></Link>
              </a>
            </div>
          </nav>

        </div>
        </div>
    )}
}

const mapStateToProps = (state)=>{
  return state
}

export default connect (mapStateToProps)(Cards);