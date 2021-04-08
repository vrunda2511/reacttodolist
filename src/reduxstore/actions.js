
 import { ADD_TODO, TOGGLE_TODO, DELETE_TODO,SET_FILTER } from "./actiontype";

let nextTodoId = 0;

export const addTodo = value => ({
  type: ADD_TODO,
  payload: {
    id:  Math.ceil(Math.random() * 100),
    value
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});
export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id: id
  }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
