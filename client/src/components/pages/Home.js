import React, { useEffect, useContext } from "react";
import Todos from "../todos/Todo";
import TodoForm from "../todos/TodoForm";
import FilteredTodos from "../FilteredTodos";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid-2">
      <div>
        {" "}
        <TodoForm />{" "}
      </div>
      <div>
        <FilteredTodos /> <Todos />
      </div>
    </div>
  );
};

export default Home;
