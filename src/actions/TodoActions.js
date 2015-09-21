import * as TodoTypes from 'types/TodoTypes';

export function add(text) {
  return {
    type: TodoTypes.ADD,
    payload: {text: text}
  };
}

export function check(id) {
  return {
    type: TodoTypes.CHECK,
    payload: {id}
  };
}

export function uncheck(id) {
  return {
    type: TodoTypes.UNCHECK,
    payload: {id: id}
  };
}
