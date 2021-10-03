import React, { useState, useContext, useEffect } from "react";
import TodoContext from "../../context/todo/todoContext";
import { Button, Form } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";

export const TodoForms = () => {
  const todoContext = useContext(TodoContext);
  const { addTodo, current, clearCurrent, updateTodo } = todoContext;

  useEffect(() => {
    if (current !== null && current !== undefined) {
      setTodo(current);
      console.log("****************************");
      console.log(current);
      console.log("****************************");
    } else {
      setTodo({ todo: "", todoDescription: "" });
    }
  }, [todoContext, current]);

  const [todos, setTodo] = useState({
    // id: uuidv4() /****ADDED SHOULD NOT BE THERE MAYBE */,
    todo: "", //[e.target.name]
    todoDescription: "", //e.target.value
  });

  const { todo, todoDescription } = todos;

  const onChange = (e) =>
    setTodo({ ...todos, [e.target.name]: e.target.value });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (current === null && current !== undefined) {
      addTodo({ id: uuidv4(), todo, todoDescription });
    } else {
      console.log("todo for update");
      updateTodo(todo);
      console.log("****************************");
    }
    // once conditions are met will clear form
    setTodo({
      todo: "", //[e.target.name]
      todoDescription: "", //e.target.value
    });
  };

  const onClearCurrent = () => {
    clearCurrent();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Field>
        <label>{current === null ? "Add To-Do" : "Edit to-do"}</label>
        <input
          placeholder="name your todo"
          value={todo}
          onChange={onChange}
          name="todo" //this is e.target.name
        />
      </Form.Field>
      <Form.Field>
        <label>
          {current === null && current !== undefined
            ? "Add To-Do description"
            : "Edit to-do description"}
        </label>
        <input
          placeholder="describe what you will be doing"
          value={todoDescription}
          name="todoDescription" //this is e.target.name
          onChange={onChange}
        />
      </Form.Field>
      <Button type="submit" basic color="blue">
        {current === null ? "Submit" : "Edit"}
      </Button>

      {current ? (
        <Button type="cancel" basic color="blue" onClick={onClearCurrent}>
          Cancel Edit
        </Button>
      ) : undefined}
    </Form>
  );
};

export default TodoForms;
