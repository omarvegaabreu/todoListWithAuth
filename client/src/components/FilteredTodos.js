import { text } from "express";
import React, { useContext, useRef, useEffect } from "react";
import TodoContext from "../context/todo/todoContext";

const FilteredTodos = () => {
  const todoContext = useContext(TodoContext);
  const { filteredTodo, clearFiltered, filtered } = todoContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onInputChange = (e) => {
    const textValue = text.current.value;
    if (textValue !== "" && textValue !== undefined) {
      filteredTodo(e.target.value);
    } else {
      clearFiltered(null);
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter To-do"
        onChange={onInputChange}
      />
    </form>
  );
};

export default FilteredTodos;
