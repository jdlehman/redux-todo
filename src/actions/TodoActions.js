import * as TodoTypes from 'types/TodoTypes';

export function checkItem(id) {
  return {
    type: TodoTypes.CHECK,
    payload: {id}
  };
}

export function uncheckItem(id) {
  return {
    type: TodoTypes.UNCHECK,
    payload: {id}
  };
}

export function add(text) {
  return {
    type: TodoTypes.ADD,
    payload: {text}
  };
}
