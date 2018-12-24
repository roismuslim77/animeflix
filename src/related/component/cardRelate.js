import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

import {relatedGenre} from '../../redux/actions/getAnime';

class Cards extends React.Component{
  base_url = 'https://animeapp1.herokuapp.com/api'

  constructor(){
    super();
    this.state ={
        page: 0
    }
}

  componentDidMount(){
    var strPage = this.props.page
    var pageInt = parseInt(strPage)
    pageInt ++
    this.setState({page: pageInt})
    this.getContent()
  }

  getContent(){
    axios.get(this.base_url+'/genre/'+this.props.genre+'?content=10&page='+this.props.page)
    .then(res=>{
      this.props.dispatch(relatedGenre(res.data.result))
    })
    .catch(err=>{
      alert(err)
    })
  }

  render(){
    return (
    <div>
    <div>
      {this.props.getRelate.relateList.map((item,key)=>
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
      )}
      </div>
      {/*page*/}
      <div style={{marginTop: '1%'}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container">
            <a className="navbar-brand" onClick={()=>{
                if(this.state.page > 2){
                    this.setState({page: this.state.page-1})
                }
            }}>
            <Link to={'/movies/'+this.props.genre+'/'+this.state.page}><b className="glyphicon glyphicon-menu-left"></b></Link>
            </a>
            <a className="navbar-brand" onClick={()=>
                {
                  this.setState({page: this.state.page+1})
                  this.getContent()
                }
              }>
            <Link to ={'/movies/'+this.props.genre+'/'+this.state.page}><b className="glyphicon glyphicon-menu-right"></b></Link>
            </a>
          </div>
        </nav>

      </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    getRelate: state.getRelate
  }
}

export default connect (mapStateToProps)(Cards);