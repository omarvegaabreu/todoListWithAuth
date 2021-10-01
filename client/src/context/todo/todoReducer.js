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
        TODOs: [action.payload, ...state.TODOs],
        loading: false,
      };

    //break;

    default:
      break;
  }
};
