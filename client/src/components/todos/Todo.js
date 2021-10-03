import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import TodoItem from "./TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  // console.log(todo);
  return (
    <Fragment>
      {todo.map((todosObject) => (
        <TodoItem key={todosObject.id} todos={todosObject} />
      ))}
    </Fragment>
  );
};

export default Todos;
