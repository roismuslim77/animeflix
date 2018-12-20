import React from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actionCreate from '../../redux/actions/getAnime';
//import { Url, DispatchUrl } from './../../redux/actions/getAnime';

class Movies extends React.Component{

    componentDidMount(){
        this.props.getEpsVid(this.props.match.params.id)
        this.props.getDetailsVid(this.props.match.params.id)
    }

    handleClick(){
      return <Redirect to="/movies/play"/>
    }

    render(){
        return(
          <article className="card-post">
            <div className="container">
            {this.props.getDetails.details.map((item, key)=>
              <div className="contain">
                <Link to={'/movies/play/'+ item.id}><img src={item.thumbnail} style={{width:200.91,height:301.365, borderRadius:20}} alt="cover" className="cover" /></Link>
                <div className="hero">
                  <div className="details">      
                    <div className="title1">{item.title} - <span>{item.rating}</span></div>
                    <div className="title2">{item.status}</div>    
                    <span className="likes">{item.view} views</span>
                  </div>
                </div>
                <div className="description">
                  <div className="column1">
                    <span className="tag">{item.tahun}</span>
                    <span className="tag">{item.durasi} min</span>
                    <span className="tag">{item.score}</span>
                  </div>
                  <div className="column2">
                    <p> {item.description}</p>
                  {this.props.getEpisode.episode.map((item, key)=>
                        <Link to="/movies/play" onClick={()=>this.props.dispatchURL(item.video_embeded)}>
                         Episode : {item.episode}</Link>
                  )}
                  </div>
                </div>
              </div>
            )}
            </div>
          </article>
        )
    }
}

const mapStateToProps = (state)=>{
  return state
}

export default connect (mapStateToProps, actionCreate)(Movies);