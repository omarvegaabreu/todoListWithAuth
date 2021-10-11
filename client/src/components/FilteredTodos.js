import React, { useContext, useRef, useEffect } from "react";
import TodoContext from "../context/todo/todoContext";

const FilteredTodos = () => {
  const todoContext = useContext(TodoContext);
  const text = useRef("");
  const { filteredTodo, clearFiltered, filtered, todos } = todoContext;

  useEffect(() => {
    if (filtered === null && todos.length > 0) {
      text.current.value = "";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered]);

  const onInputChange = (e) => {
    const textValue = text.current.value;
    if (textValue !== "" && textValue !== undefined) {
      filteredTodo(e.target.value);
    } else {
      clearFiltered(null);
    }
  };

  const renderedFiltered =
    todos.length > 0 ? (
      <form>
        <label>Filter to do</label>

        <input
          ref={text}
          type="text"
          placeholder="Filter To-do"
          onChange={onInputChange}
        />
      </form>
    ) : undefined;

  return <div>{renderedFiltered}</div>;
};

export default FilteredTodos;
