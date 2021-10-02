import React, { useContext } from "react";
import { Button, Card } from "semantic-ui-react";
import TodoContext from "../../context/todo/todoContext";

export const TodoItem = ({ todos }) => {
  const { id, todo, todoDescription } = todos;

  const todoContext = useContext(TodoContext);

  const deleteTodo = () => {
    console.log(`delete todo ${id}`);
  };

  return (
    // <Card className="card bg-light">
    //   <Card.Content>
    //     <Card.Header>{todo}</Card.Header>

    //     <Card.Description>
    //       {todoDescription ? <p>{todoDescription}</p> : null}
    //     </Card.Description>
    //   </Card.Content>
    //   <Card.Content extra>
    //     <div className="ui two buttons">
    //       <Button basic color="green">
    //         Edit
    //       </Button>
    //       <Button basic color="red" onClick={deleteTodo}>
    //         Delete
    //       </Button>
    //     </div>
    //   </Card.Content>
    // </Card>

    <div className="card bg-light">
      <h3 className="text-primary text-left" key={id}>
        {todo}
      </h3>
      {todoDescription ? <p>{todoDescription}</p> : null}

      <button className="btn btn-dark btn-sm">Edit</button>
      <button className="btn btn-danger btn-sm">Delete</button>
    </div>
  );
};

export default TodoItem;
