import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import counter from './counter';
import cardAnime from './cardAnime';
import cardTopAll from './cardTopAll';
import cardPopular from './cardPopular';
import cardMovie from './cardMovie';
import getEpisode from './getEpisode';
import getDetails from './getDetails';
import getGenres from './getGenre';
import cardSearch from './search';
import getRelate from './relate';
import authReducer from './auth';

const appReducer = combineReducers({
    counter,
    cardAnime,
    cardTopAll,
    cardPopular,
    cardMovie,
    getEpisode,
    getDetails,
    getGenres,
    cardSearch,
    getRelate,
    form: formReducer,
    authReducer 
});

export default appReducer;