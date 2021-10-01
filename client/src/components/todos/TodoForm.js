import React, { useState, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import { Button, Checkbox, Form } from "semantic-ui-react";

export const TodoForms = () => {
  const todoContext = useContext(TodoContext);
  console.log(todoContext);

  const [todos, setTodo] = useState({
    todo: "", //[e.target.name]
    todoDescription: "", //e.target.value
  });

  const { todo, todoDescription } = todos;
  const onChange = (e) =>
    setTodo({ ...todos, [e.target.name]: e.target.value });

  // console.log(todos);

  const onSubmit = (e) => {
    e.prevent.default();

    todoContext.addTodo(todos);//will add todo to app state

    setTodo({ todo: "", //will reset component state
    todoDescription: "",
  })

  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Title</label>
        <input
          placeholder="name your todo"
          value={todo}
          onChange={onChange}
          name="todo" //this is e.target.name
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          placeholder="describe what you will be doing"
          value={todoDescription}
          name="todoDescription" //this is e.target.name
          onChange={onChange}
        />
      </Form.Field>
      <Button type="submit" basic color="blue">
        Submit
      </Button>
    </Form>
  );
};

export default TodoForms;
