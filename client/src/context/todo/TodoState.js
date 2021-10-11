import React, { useReducer } from "react";
//import { v4 as uuidv4 } from "uuid";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODO,
  FILTER_TODOS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const TodoState = (props) => {
  const initialState = {
    todos: [],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //Add todo
  const addTodo = (todo) => dispatch({ type: ADD_TODO, payload: todo });

  //Delete todo
  const deleteTodo = (id) => dispatch({ type: DELETE_TODO, payload: id });

  //set current todo
  const setCurrent = (todo) => dispatch({ type: SET_CURRENT, payload: todo });

  //clear current todo
  const clearCurrent = () => dispatch({ type: SET_CURRENT, payload: null });

  //update todo
  const updateTodo = (todo) => dispatch({ type: UPDATE_TODO, payload: todo });
  //filter todo
  const filteredTodo = (text) =>
    dispatch({ type: FILTER_TODOS, payload: text });

  //clear filter
  const clearFiltered = (text) =>
    dispatch({ type: FILTER_TODOS, payload: null });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        filtered: state.filtered,
        addTodo,
        deleteTodo,
        setCurrent,
        clearCurrent,
        updateTodo,
        filteredTodo,
        clearFiltered,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
