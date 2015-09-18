import * as reducers from 'reducers';
import {createStore, combineReducers} from 'redux';

export default function configureStore() {
  const reducer = combineReducers(reducers);
  return createStore(reducer);
}
