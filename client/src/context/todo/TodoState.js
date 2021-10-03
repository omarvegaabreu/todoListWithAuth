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
    console.log("add todo " + todo);
    dispatch({ type: ADD_TODO, payload: todo });
  };
  //Delete todo
  const deleteTodo = (id) => {
    console.log("add id " + id);
    dispatch({ type: DELETE_TODO, payload: id });
  };
  //set current todo /*****************************************BUG IS HERE */
  const setCurrent = ({ todo, description }) => {
    /********************* ONLY GETTING TODO NOT DESCRIPTION IN OBJECT */
    console.log(todo);
    console.log(description);
    dispatch({ type: SET_CURRENT, payload: todo });
    /********************* ONLY GETTING TODO NOT DESCRIPTION IN OBJECT */
  };

  //clear current todo
  const clearCurrent = () => {
    dispatch({ type: SET_CURRENT });
  };

  //update todo
  const updateTodo = (todo) => {
    console.log("update " + todo);
    dispatch({ type: UPDATE_TODO, payload: todo });
  };

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
          updateTodo,
        }
        // console.log(state.todos))
      }
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
