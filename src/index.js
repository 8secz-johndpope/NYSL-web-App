import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import App from './App';

firebase.initializeApp({
    apiKey: "AIzaSyBq64P3sRp-SiyxIeWPb8Lwy_BSwsNsHz0",
    authDomain: "nysl-mobile-app.firebaseapp.com",
    databaseURL: "https://nysl-mobile-app.firebaseio.com",
    projectId: "nysl-mobile-app",
    storageBucket: "nysl-mobile-app.appspot.com",
    messagingSenderId: "1036817541116"
});

const store = createStore(reducers, {},
    applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>        
        , document.querySelector('#container'));
