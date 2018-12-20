import {combineReducers} from 'redux';

import counter from './counter';
import cardAnime from './cardAnime';
import cardTopAll from './cardTopAll';
import cardPopular from './cardPopular';
import cardMovie from './cardMovie';
import getEpisode from './getEpisode';
import getDetails from './getDetails';

const appReducer = combineReducers({
    counter,
    cardAnime,
    cardTopAll,
    cardPopular,
    cardMovie,
    getEpisode,
    getDetails
});

export default appReducer;