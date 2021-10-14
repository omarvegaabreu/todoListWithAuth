import React, { useReducer } from "react";
import axios from "axios";
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
  CLEAR_TODOS,
  TODOS_ERROR,
} from "../types";

const TodoState = (props) => {
  const initialState = {
    todos: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //Add todo
  const addTodo = async (todo) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/todos", todo, config);
      dispatch({ type: ADD_TODO, payload: res.data });
    } catch (error) {
      dispatch({ type: TODOS_ERROR, payload: error.response.msg });
    }
  };

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
  const clearTodos = () => {
    dispatch({ type: CLEAR_TODOS, payload: [] });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addTodo,
        deleteTodo,
        setCurrent,
        clearCurrent,
        updateTodo,
        filteredTodo,
        clearFiltered,
        clearTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
