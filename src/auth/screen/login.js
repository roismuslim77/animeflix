import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

// Login form
import LoginForm from '../components/loginForm';
import Nav from '../components/nav';
// import action
import * as actionCreate from '../../redux/actions/getAnime';

class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            toHome: false
          }
    }
    setToken(idToken){
        localStorage.setItem('id_token', idToken)
    }
    handleSubmit(value) {
        this.props.getAuth(value)
        .then((res)=>{
            this.setState({toHome: true})
            this.setToken(this.props.authReducer.user.name)
            
        })
        .catch(err=>'USername or password salah')
    }
    
    render() {
      if (this.state.toHome === true) {
        return <Redirect to="/user" />
      }
  
      return (
        <header>
          <Nav />
          <div className="form">
            <div style={{ width: "30%" }}>
              <LoginForm onSubmit={this.handleSubmit.bind(this)} />
            </div>
          </div>
        </header>
      );
    }
  }

//   const mapStateToProps = (state)=>{
//     return state
//   }
  
  
//  export default connect()(Login);
  export default connect(null, actionCreate)(Login);