import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  // console.log(todo);
  return (
    <Fragment>
      {todo.map((todosObject) => {
        return <TodoItem key={todosObject.id} todos={todosObject} />;
      })}
      <div> another div</div>
    </Fragment>
  );
};

export default Todos;
