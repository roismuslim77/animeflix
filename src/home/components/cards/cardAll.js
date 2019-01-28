import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import axios from 'axios';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/bootstrap3.css';
import '../../../assets/css/aa.scss';
import '../../../assets/css/parrallax.css';

import * as actionCreate from '../../../redux/actions/getAnime';
import {animeTop, animePop, movieAll, detailsVid} from '../../../redux/actions/getAnime';
class Cards extends React.Component{
//   componentDidMount(){
//     axios.get('https://animeapp1.herokuapp.com/api?sort=Popular&content=10&page=1')
//     .then(res=>{
//       this.props.dispatch(AnimeAll(res.data.results))
//     })
//     .catch(err=>{
//       alert(err)
//     })
//   }

    addDetails(id){
        this.props.dispatch(detailsVid(id)) 
    }

    componentDidMount(){
        if (this.props.typeList === 'Pop'){
          this.props.dispatch(animePop())
         } else if (this.props.typeList === 'Top') {
           this.props.dispatch(animeTop())
         } else if(this.props.typeList === 'Movie'){
          this.props.dispatch(movieAll('1'))
         } else {
          //  this.props.getMovie()
         }
    }

  cardMovie(){
    return (
        this.props.cardMovie.cardMovie.map((item,key)=>
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
        )
      );
  }

  cardPopular(){
    return (
        this.props.cardPopular.cardPopular.map((item,key)=>
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
        )
      );
  }

  cardTopAll(){
    return(
    this.props.cardTopAll.cardTopAll.map((item,key)=>
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
    ))
  }

  cardSearch(){
    return(
    this.props.cardSearch.cardSearch.map((item,key)=>
    <div className="movie-card">
    <Link to={'/movies/details/'+ item.id}>
      <img className="movie-header" src={item.thumbnail} style={{backgroundSize:'cover'}}/>
      <div className="movie-content">
        <div className="movie-info">
          <div className="info-section">
            <label>Status</label>
            <span>{item.status}</span>
          </div>
          <div className="info-section">
            <label>Views</label>
            <span>{item.view}</span>
          </div>
          <div className="info-section">
            <label>Score</label>
            <span>{item.score}</span>
          </div>
        </div>
      </div>
    </Link>
    </div>
    ))
  }

  render(){
    //console.log(JSON.stringify(this.props.cardPopular.cardPopular))
    // return(
    //   this.props.cardTopAll.isLoading === true ? 
    //   <LoadingOverlay 
    //     active={this.props.cardTopAll.isLoading}
    //     spinner
    //     text='Loading . . '/> :
    //   this.cardTopAll()
    // )
    switch(this.props.typeList){
        case "Pop":
        return( this.props.cardPopular.isLoading === true ? 
            <LoadingOverlay 
              active={this.props.cardPopular.isLoading}
              spinner/> : this.cardPopular())
        case "Top":
        return(this.props.cardTopAll.isLoading === true ? 
          <LoadingOverlay 
            active={this.props.cardTopAll.isLoading}
            spinner/> : this.cardTopAll())
        case "Movie":
        return(this.props.cardPopular.isLoading === true ? 
          <LoadingOverlay 
            active={this.props.cardPopular.isLoading}
            spinner/> : this.cardMovie())
        default:
        return(console.log('Connection Errorr'))
      }
  }
}

const mapStateToProps = (state)=>{
  return state
}

export default connect (mapStateToProps)(Cards);