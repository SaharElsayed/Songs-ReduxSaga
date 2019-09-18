import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';


import App from './components/App.component';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
// Run the saga
sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);