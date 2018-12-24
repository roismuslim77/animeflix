import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducers from '../reducers/index.reducer';
import middleware from '../middlewares'; 
//import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)

//export default createStore(reducers, applyMiddleware(thunk));
// export default createStore(reducers);