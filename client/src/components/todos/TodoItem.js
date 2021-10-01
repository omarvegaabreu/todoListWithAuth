import React from "react";

export const TodoItem = ({ todos }) => {
  const { id, todo, todoDescription } = todos;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left" key={id}>
        {todo}
      </h3>
    </div>
  );
};

export default TodoItem;
