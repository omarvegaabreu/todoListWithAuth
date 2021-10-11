import React, { useEffect, useContext } from "react";
import Todos from "../todos/Todo";
import TodoForm from "../todos/TodoForm";
import FilteredTodos from "../FilteredTodos";
import AuthContext from "../../context/auth/authContext";
import { Divider, Segment, Grid } from "semantic-ui-react";
const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Segment>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <TodoForm />
        </Grid.Column>
        <Grid.Column>
          <FilteredTodos /> <Todos />
        </Grid.Column>
      </Grid>

      <Divider vertical />
    </Segment>
  );
};

export default Home;
