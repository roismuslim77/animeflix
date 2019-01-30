import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/bootstrap3.css';
import '../../../assets/css/aa.scss';
import '../../../assets/css/parrallax.css';

import {Search, detailsVid} from '../../../redux/actions/getAnime';

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
            this.props.dispatch(Search(this.props.name))
        }
        cardSearch(){
            return(
            this.props.cardSearch.search.map((item,key)=>
            <div className="movie-card">
            <Link  to={'/movies/details/'+ item.detailAnime.title} onClick={()=>this.addDetails(item.detailAnime.id)}>
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

        render(){
            return(
            <div>{this.cardSearch()}</div>
            )
        }
}

const mapStateToProps = (state)=>{
    return state
}
          
export default connect (mapStateToProps)(Cards);
