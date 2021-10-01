import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export const TodoForms = () => {
  const [todos, setTodo] = useState({
    todo: "",
    todoDescription: "",
  });

  const { todo, todoDescription } = todos;
  const onChange = () => {
    console.log("On change Submit");
  };

  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder="name your todo" value={todo} onChange={onChange} />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          placeholder="describe what you will be doing"
          value={todoDescription}
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
