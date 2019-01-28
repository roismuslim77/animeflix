import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LandingPage from '../../home/screens/LandingPage';
import NotFoundPage from '../../home/screens/LandingPage';
import MovieScreen from '../../movies/screens';
import RecentScreen from '../../recent/screens';
import Player from '../../movies/components/player';
import MovieDetails from '../../movies/screens/selected';
// import Login from '../../auth/screens/login';
// import Register from '../../auth/screens/register';
// import LandingPage from '../../components/LandingPage';
// import NotFoundPage from '../../components/NotFoundPage';
import SearchPage from './../../movies/screens/search';
import relatePage from '../../related/screen';
import loginPage from '../../auth/screens/Login';
import regisPage from '../../auth/screens/Register';

const Router = ()=>(
    <BrowserRouter>
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/register" component={regisPage}/>
                <Route exact path="/login" component={loginPage}/>
                <Route exact path="/movies/:page" component={MovieScreen}/>
                <Route exact path="/recent" component={RecentScreen}/>
                <Route exact path="/movies/play/:id" component={Player}/>
                <Route exact path="/movies/play" component={Player}/>
                <Route exact path="/movies/details/:id" component={MovieDetails}/>
                <Route exact path="/movies/:genre/:page" component={relatePage}/>
                <Route exact path="/search/:nama" component={SearchPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </React.Fragment>
    </BrowserRouter>
)

export default Router;
