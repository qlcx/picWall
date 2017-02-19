import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { hashHistory } from 'react-router'

import createFetchMiddleware from 'redux-composable-fetch'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from './index'

const FetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      });
    });
  },
});

const finalCreateStore = compose(
  applyMiddleware(ThunkMiddleware, FetchMiddleware, routerMiddleware(hashHistory))
)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer,
}));

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // module.hot.accept('./', () => {
    //   const nextRootReducer = require('./index');
    //   store.replaceReducer(nextRootReducer);
    // });
  }

  return store;
}