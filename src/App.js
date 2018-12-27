import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store/index.store';
import Router from './redux/routers/route';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}> 
        <Router/>
        </PersistGate>
      </Provider>  
    );
  }
}

export default App;
