import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODO,
  TODOS_ERROR,
  CLEAR_TODOS,
  FILTER_TODOS,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload.id ? action.payload : todo;
        }),
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
    case FILTER_TODOS:
      return {
        ...state,
        filtered: state.todos.filter((todo) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return todo.todo.match(regex) || todo.todoDescription.match(regex);
        }),
      };

    case CLEAR_TODOS: {
      return {
        ...state,
        todos: [],
      };
    }
    case TODOS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      break;
  }
};
