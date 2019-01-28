import React from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Index extends React.Component {
  state={
    toHome: false,
    toSearch: false,
    search: '',
  }
  handleSubmit(e){
    if(e.key==='Enter'){
      e.preventDefault();
      this.setState({toSearch: true})
    }
  }
  handleChange(e){
    this.setState({search: e.target.value})
  }
  render() {
    if(this.state.toHome===true){
      return <Redirect to='/'/>
    }
    if(this.state.toSearch===true){
      return <Redirect to={'/search/'+this.state.search}/>
    }
   return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
        <Link to="/">
          <a className="navbar-brand">
          <img src="https://bit.ly/2EC6kKY"/>
          </a>
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link to="/">
                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/movies/1">
                <a className="nav-link" href="/Movies">Movies</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/recent">
                <a className="nav-link" href="/Updated">Recently Added</a>
              </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">My List</a>
              </li>
            </ul>
            <div class="search">
            <form className="form-inline my-2 my-lg-0">
              <input onChange={(e)=>this.handleChange(e)} onKeyPress={(event)=>this.handleSubmit(event)} style={{color:'#fff'}} type="text" class="form-control input-sm bg-dark" maxlength="50" placeholder="Search..." />
              <span className="glyphicon glyphicon-search"></span>
              <b className="nav-link" href="#">DVD</b>
              <Link to="/login"><b className='tag'>Login</b></Link>
            </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
