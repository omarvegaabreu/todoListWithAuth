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
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos] /***todo or todos? */,
      };
    case UPDATE_TODO:
      return {
        ...state,
        // todos: console.log(state.todos),
        todos: state.todos.map((todo) => {
          console.log(todo);
          const check =
            todo.id === action.payload.id ? todo : action.payload.todo;
          // console.log("check " + check);
          /*******************************************************check need evaluation */
          return todo.id === action.payload.id ? action.payload.todo : todo;
        }) /***todo or todos? */,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      break;
  }
};
