import React, { useState, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";
import { Button, Checkbox, Form } from "semantic-ui-react";

export const TodoForms = () => {
  const todoContext = useContext(TodoContext);
  // console.log(todoContext); passing object

  const [todos, setTodo] = useState({
    todo: "", //[e.target.name]
    todoDescription: "", //e.target.value
  });

  const { todo, todoDescription } = todos;
  const onChange = (e) =>
    setTodo({ ...todos, [e.target.name]: e.target.value });

  // console.log(todos);

  const onFormSubmit = (e) => {
    // console.log(e);
    e.preventDefault();
    // console.log("line 23 Todoform.js " + todos);
    // todoContext.addTodo(todos); /************************* */
    setTodo({
      todo: "", //[e.target.name]
      todoDescription: "", //e.target.value
    });
    // console.log(todos);
  };

  return (
    <Form onSubmit={onFormSubmit}>
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