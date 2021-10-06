import Todos from "../todos/Todo";
import TodoForm from "../todos/TodoForm";
import FilteredTodos from "../FilteredTodos";

const Home = () => {
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
