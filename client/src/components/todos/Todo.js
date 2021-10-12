// import { Filter } from "@mui/icons-material";
import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos, filtered } = todoContext;

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((filtered) => <TodoItem todos={filtered} />)
        : todos.map((todo) => <TodoItem todos={todo} />)}
    </Fragment>
  );
};

export default Todos;
