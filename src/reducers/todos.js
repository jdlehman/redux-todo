import Immutable from 'immutable';
import uuid from 'node-uuid';
import * as TodoTypes from 'types/TodoTypes';

function initialState() {
  return Immutable.fromJS([
    {id: uuid.v4(), text: "Item 1 from Store", done: false},
    {id: uuid.v4(), text: "Item 2", done: false}
  ]);
}

function createItem(text) {
  return Immutable.fromJS({id: uuid.v4(), text, done: false});
}

function findTodoIndex(state, id) {
  return state.findIndex(todo => todo.get('id') === id);
}

function updateTodoById(state, id, updateFunc) {
  return state.updateIn(
    [findTodoIndex(state, id)],
    todo => updateFunc(todo)
  );
}

export default function todos(state = initialState(), action) {
  switch (action.type) {
    case TodoTypes.ADD:
      return state.push(
        createItem(action.payload.text)
      );
    case TodoTypes.CHECK:
      return updateTodoById(
        state,
        action.payload.id,
        todo => todo.set('done', true)
      );
    case TodoTypes.UNCHECK:
      return updateTodoById(
        state,
        action.payload.id,
        todo => todo.set('done', false)
      );
    default:
      return state;
  }
}
