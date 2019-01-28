import React from 'react';
import {connect} from 'react-redux';

class Users extends React.Component{
    //   componentDidMount(){
    //     axios.get('https://animeapp1.herokuapp.com/api?sort=Popular&content=10&page=1')
    //     .then(res=>{
    //       this.props.dispatch(AnimeAll(res.data.results))
    //     })
    //     .catch(err=>{
    //       alert(err)
    //     })
    //   }
        
        cardSearch(){
            return(
                <div style={{color: 'white'}}>
                    {console.log(this.props.authReducer.user.name)}
                </div>
            )
        }

        render(){
            return(
            <div>
            {this.cardSearch()}
            {localStorage.getItem('id_token')}</div>
            )
        }
}

const mapStateToProps = (state)=>{
    return state
}
          
export default connect (mapStateToProps)(Users);
