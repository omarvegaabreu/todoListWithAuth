import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import TodoItem from "./TodoItem";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;

  return (
    <Fragment>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todos={todo} />
      ))}
    </Fragment>
  );
};

export default Todos;
