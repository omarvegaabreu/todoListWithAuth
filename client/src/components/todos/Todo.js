import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import TodoItem from "./TodoItem";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  return (
    <Fragment>
      {todo.map((todosObject) => (
        <TodoItem key={todosObject.id} todos={todosObject} />
      ))}
    </Fragment>
  );
};

export default Todos;
