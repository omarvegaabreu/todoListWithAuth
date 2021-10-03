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
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //Add todo
  const addTodo = (todo) => {
    // console.log(todo);
    // todo.id = uuidv4();
    dispatch({ type: ADD_TODO, payload: todo });
  };
  //Delete todo
  const deleteTodo = (id) => {
    // console.log(todo);
    // todo.id = uuidv4();
    dispatch({ type: DELETE_TODO, payload: id });
  };
  //set current todo

  //clear current todo

  //update todo

  //filter todo

  //clear filter

  return (
    <TodoContext.Provider
      value={
        {
          todo: state.todos,
          addTodo,
          deleteTodo,
        }
        // console.log(state.todos))
      }
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
