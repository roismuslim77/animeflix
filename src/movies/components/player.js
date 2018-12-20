import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import * as actionCreate from '../../redux/actions/getAnime';

class VideoPlayer extends React.Component{
    render(){
    return(
        <div className="embed-responsive embed-responsive-16by9">
             {console.log('str'+this.urlStr)}
             <iframe allowFullScreen className="embed-responsive-item" src={this.props.counter.url}></iframe> 
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect (mapStateToProps, actionCreate)(VideoPlayer);
