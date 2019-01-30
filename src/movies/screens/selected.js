import React from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import '../../assets/css/bootstrap.css';
import '../../assets/css/bootstrap3.css';
import '../../assets/css/aa.scss';
import Nav from '../../home/components/nav';
import Video from '../components/player';
import * as actionCreate from '../../redux/actions/getAnime';
//import { Url, DispatchUrl } from './../../redux/actions/getAnime';

class Movies extends React.Component{
    // componentDidMount(){
    //   //this.props.getEpsVid(this.props.match.params.id)
    //   //this.props.getDetailsVid(this.props.match.params.id)
    // }
    handleError(vid){
      var url = vid;
      var subUrl = url.substring(6,0);
      if (subUrl === 'http:h'){
        return '#'
      } else {
        return '/movies/play'
      }
    }
    render(){
      return(
      <div>
      <Nav/>
      {this.props.getDetails.isLoading===true ?
        <div style={{marginTop: '20%'}}>
        <LoadingOverlay 
          active={this.props.getDetails.isLoading}
        spinner/></div> :
        this.selectItem() 
          }
        </div>)
    }
    selectItem(){
      return(
        <div>
        <article className="card-post">
          <div className="container">
          {//this.props.getDetails.details.map((item, key)=>
            <div className="contain">
            <Link to={'/movies/play/'+this.props.getDetails.details.detailAnime.title}>
              <a className="trailer-preview"><i class="glyphicon glyphicon-play" style={{color:'#fff'}} aria-hidden="true"></i></a>
            </Link>
              <img src={this.props.getDetails.details.detailAnime.thumbnail} style={{width:200.91,height:301.365, borderRadius:20}} alt="cover" className="cover" />
              <div className="hero">
                <div className="detailss">      
                  <div className="title1">{this.props.getDetails.details.detailAnime.title} <span>{this.props.getDetails.details.rating}</span></div>
                  <div className="title2">{this.props.getDetails.details.detailAnime.status}</div>
                  <div className="likes">{this.props.getDetails.details.detailAnime.view} views</div>
                  {this.props.getDetails.details.genres.map((item, key)=>
                      <Link to={'/movies/'+item.title+'/1'}><span className="tag">{item.title}</span></Link>
                    )}
                </div>
              </div>
              <div className="description">
                <div className="column1">
                  <span className="tag">{this.props.getDetails.details.detailAnime.tahun}</span>
                  <span className="tag">{this.props.getDetails.details.detailAnime.durasi} min</span>
                  <span className="tag">{this.props.getDetails.details.detailAnime.score}</span>
                </div>
                <div className="column2">
                  <p>Description: <br></br> {this.props.getDetails.details.detailAnime.description}</p>
                {this.props.getEpisode.episode.map((item, key)=>
                      <Link to={this.handleError(item.video_embeded)} >
                      <button className="btn btn-outline-danger" style={{margin:5}}> Episode : {item.episode}</button></Link>
                )}

                </div>
              </div>
            </div>
          }
          </div>
        </article>
        </div>
      )
    }  
}

const mapStateToProps = (state)=>{
  return state
}

export default connect (mapStateToProps, actionCreate)(Movies);