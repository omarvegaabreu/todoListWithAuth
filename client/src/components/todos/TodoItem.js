import React from "react";

export const TodoItem = ({ todos }) => {
  const { id, todo, todoDescription } = todos;

  return (
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
