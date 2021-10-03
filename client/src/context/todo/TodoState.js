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
    todos: [
      {
        id: 1,
        todo: "first",
        todoDescription: "first todo",
      },
      {
        id: 2,
        todo: "second",
        todoDescription: "",
      },
      {
        id: 3,
        todo: "third",
        todoDescription: "third todo",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //Add todo
  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };
  //Delete todo
  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };
  //set current todo
  const setCurrent = (todo) => {
    dispatch({ type: SET_CURRENT, payload: todo });
  };

  //clear current todo
  const clearCurrent = (todo) => {
    dispatch({ type: SET_CURRENT });
  };

  //update todo

  //filter todo

  //clear filter

  return (
    <TodoContext.Provider
      value={
        {
          todo: state.todos,
          current: state.current,
          addTodo,
          deleteTodo,
          setCurrent,
          clearCurrent,
        }
        // console.log(state.todos))
      }
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
