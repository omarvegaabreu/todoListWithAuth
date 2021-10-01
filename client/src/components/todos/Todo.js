import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  // console.log(todo);
  return (
    <Fragment>
      {todo.map((label) => {
        return <h3 key={uuidv4()}>{label.todo}</h3>;
      })}
    </Fragment>
  );
};

export default Todos;
