import { PasswordRounded } from "@mui/icons-material";
import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import AuthContext from "../../context/auth/authContext";

const Register = () => {
  const authContext = useContext(AuthContext);
  const { addUser } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (user) {
      addUser(user);
    }

    console.log("register submit");
    console.log(user);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          User Login
        </Header>
        <Form onSubmit={onFormSubmit} size="large">
          <Segment stacked>
            <Form.Input
              value={email}
              onChange={onChange}
              name="email"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              value={password}
              onChange={onChange}
              name="password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button value="login" color="blue" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
export default Register;
