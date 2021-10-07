import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const Register = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <label>email</label>
      <input placeholder="youremail@email.com" />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="password" />
    </Form.Field>

    <Button type="submit">Submit</Button>
  </Form>
);

export default Register;
