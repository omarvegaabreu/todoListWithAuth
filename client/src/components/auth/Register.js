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
import AlertContext from "../../context/alert/alertContext";
import { validEmail, isAlphaNumeric } from "../../util/validation";

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);

  const { addUser } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (validEmail(email)) {
      setAlert("You suck nigga! enter a valid email", "ui red message");

      return;
    }

    if (!isAlphaNumeric(password)) {
      setAlert("Password requires numbers and letters", "ui red message");
      return;
    }

    if (
      user.name === "" ||
      user.email === "" ||
      user.password === "" ||
      user.password2 === ""
    ) {
      setAlert("Please fill out all fields.", "ui negative message");
    } else if (user.password !== user.password2) {
      setAlert("Password does not match.", "ui negative message");
    } else {
      addUser(user);
      setAlert("User registered ", "ui green message");
    }
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
              required
            />
            <Form.Input
              value={email}
              onChange={onChange}
              name="email"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              required
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
              required
              minLength="6"
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
              required
              minLength="6"
            />

            <Button value="register" color="blue" fluid size="large">
              Register
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
export default Register;