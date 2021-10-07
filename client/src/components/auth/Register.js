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

  // useEffect(() => {
  //   if (user !== null && user !== undefined && user !== "") {
  //     addUser(user);
  //   }
  // });

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

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
          Register your account
        </Header>
        <Form onSubmit={onFormSubmit} size="large">
          <Segment stacked>
            <Form.Input
              onChange={onChange}
              value={name}
              name="name"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
            />
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
            <Form.Input
              value={password2}
              onChange={onChange}
              name="password2"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm password"
              type="password"
            />

            <Button color="blue" fluid size="large">
              Register
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
export default Register;
