import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODO,
  FILTER_TODOS,
  CLEAR_FILTER,
  TODO_ERROR,
  CLEAR_TODOS,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  // console.log(state);
  // console.log("todo reducer");
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos] /***todo or todos? */,
        loading: false,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      break;
  }
};
