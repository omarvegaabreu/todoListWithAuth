import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const Todos = () => {
  const todoContext = useContext(TodoContext);

  return (
    <Fragment>
      {todoContext.map((todo) => {
        return <h3>{todo.name}</h3>;
      })}
    </Fragment>
  );
};

export default Todos;
