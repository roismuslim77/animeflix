import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {MovieAll} from '../../redux/actions/getAnime';

class Cards extends React.Component{
  base_url = 'https://animeapp1.herokuapp.com/api'

  constructor(){
    super();
    this.state ={
        page: 1
    }
}

  componentDidMount(){
    this.getContent()
  }

  getContent(){
    axios.get(this.base_url+'?sort=Movie&content=10&page='+this.state.page)
    .then(res=>{
      this.props.dispatch(MovieAll(res.data.results))
    })
    .catch(err=>{
      alert(err)
    })
  }

  render(){
    return (
    <div>
    <div>
      {this.props.cards.cardMovie.map((item,key)=>
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
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" onClick={()=>{
                if(this.state.page > 1){
                  this.setState({page: this.state.page-1})
                  this.getContent()
                }
              }}>Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" onClick={()=>
                {
                  this.setState({page: this.state.page+1})
                  this.getContent()
                }
              }>Next</a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    cards: state.cardMovie
  }
}

export default connect (mapStateToProps)(Cards);