// import { Filter } from "@mui/icons-material";
import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import TodoItem from "./TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos, filtered } = todoContext;

  if (todos.length === 0) {
    return <hinge>You have nothing to do </hinge>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((filtered) => (
              <CSSTransition key={filtered.id} timeout={1000} classNames="item">
                <TodoItem todos={filtered} />
              </CSSTransition>
            ))
          : todos.map((todo) => (
              <CSSTransition key={todo.id} timeout={1000} classNames="item">
                <TodoItem todos={todo} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Todos;
