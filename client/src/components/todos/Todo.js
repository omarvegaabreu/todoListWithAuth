// import { Filter } from "@mui/icons-material";
import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import TodoItem from "./TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos, filtered } = todoContext;

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((filtered) => (
              <CSSTransition
                key={filtered._id}
                timeout={1000}
                classNames="item"
              >
                <TodoItem todos={filtered} />
              </CSSTransition>
            ))
          : todos.map((todo) => (
              <CSSTransition key={todo._id} timeout={1000} classNames="item">
                <TodoItem todos={todo} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Todos;
