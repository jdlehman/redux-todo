import * as TodoTypes from 'types/TodoTypes';
import uuid from 'node-uuid';
import Immutable from 'immutable';

function initialState() {
  return Immutable.fromJS([
    {id: uuid.v4(), text: 'Item 1', done: false},
    {id: uuid.v4(), text: 'Item 2', done: false}
  ]);
}

function createItem(text) {
  return Immutable.fromJS({id: uuid.v4(), text});
}

function findTodoIndex(state, id) {
  return state.findIndex(todo => todo.get('id') === id);
}

function updateTodoById(state, id, calcNewValue) {
  return state.updateIn(
    [
      findTodoIndex(state, id)
    ],
    todo => calcNewValue(todo)
  );
}

export default function todos(state = initialState(), action) {
  switch (action.type) {
    case TodoTypes.CHECK:
      return updateTodoById(
        state,
        action.payload.id,
        view => view.set('done', true)
      );
    case TodoTypes.UNCHECK:
      return updateTodoById(
        state,
        action.payload.id,
        view => view.set('done', false)
      );
    case TodoTypes.ADD:
      return state.push(createItem(action.payload.text));
    default:
      return state;
  }
}
