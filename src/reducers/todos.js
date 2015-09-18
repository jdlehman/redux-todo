import uuid from 'node-uuid';
import Immutable from 'immutable';

function initialState() {
  return Immutable.fromJS([
    {id: uuid.v4(), text: 'Item 1', done: false},
    {id: uuid.v4(), text: 'Item 2', done: false}
  ]);
}

export default function todos(state = initialState(), action) {
  return state;
}
