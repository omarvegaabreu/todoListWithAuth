import React, { useState } from "react";
import { Button, Form, Card } from "semantic-ui-react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;
  return (
    <Form>
      <Form.Group widths={1}>
        <Form.Input label="First name" placeholder="First name" />
        <Form.Input label="Last name" placeholder="Last name" />
      </Form.Group>
      <Form.Group>
        <Form.Input label="password" placeholder="password" />
        <Form.Input label="confirm password" placeholder="confirm password" />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default Register;
