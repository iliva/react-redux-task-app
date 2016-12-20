import { applyMiddleware, createStore, compose } from 'redux';
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware";

import rootReducer from './reducers/index';

import tasks from './data/tasks';
import buttons from './data/buttons';

const middleware = applyMiddleware(promise(), thunk, logger())

const defaultState = {  tasks, buttons };
const store = createStore(rootReducer, defaultState, middleware);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
