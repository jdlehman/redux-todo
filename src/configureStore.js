import {combineReducers, createStore} from 'redux';
import * as reducers from 'reducers/index';
// import todos from 'reducers/todos';

export default function configureStore() {
  const reducer = combineReducers(reducers);
  return createStore(reducer);
  // return createStore(todos);
}
