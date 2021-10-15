import React, { useContext } from "react";
import { Button, Card } from "semantic-ui-react";
import TodoContext from "../../context/todo/todoContext";

export const TodoItem = ({ todos }) => {
  const { _id, todo, todoDescription } = todos;

  const todoContext = useContext(TodoContext);

  const { deleteTodo, setCurrent, clearCurrent } = todoContext;

  const onDelete = () => {
    deleteTodo(_id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(todos);
  };
  return (
    <Card fluid className="card bg-light">
      <Card.Content>
        <Card.Header>{todo}</Card.Header>

        <Card.Description>
          {todoDescription ? <p>{todoDescription}</p> : null}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
<<<<<<< HEAD
        <div className="ui two buttons" onClick={onDelete}>
          <Button basic color="green">
            Done!
=======
        <div className="ui two buttons">
          <Button basic color="green" onClick={onEdit}>
            Edit
>>>>>>> appdone
          </Button>
          <Button basic color="red" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default TodoItem;
