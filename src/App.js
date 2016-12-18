import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAR-Y0-zpRidaoeBOCLyKogTasnmA_hIok",
      authDomain: "manager-49990.firebaseapp.com",
      databaseURL: "https://manager-49990.firebaseio.com",
      storageBucket: "manager-49990.appspot.com",
      messagingSenderId: "401880562603"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
