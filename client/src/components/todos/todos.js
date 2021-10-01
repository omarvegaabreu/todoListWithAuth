import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  // console.log(todo);
  return (
    <Fragment>
      {todo.map((label) => {
        return <h3>{label.todo}</h3>;
      })}
    </Fragment>
  );
};

export default Todos;
