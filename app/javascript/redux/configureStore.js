import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { greetingsReducer } from './greetingsReducer';

const reducer = combineReducers({
  greetingsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
