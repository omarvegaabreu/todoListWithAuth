import React from "react";
import { Container, Divider, List, Segment, Header } from "semantic-ui-react";

const About = () => (
  <div>
    <Header as="h2" attached="top">
      To do with Authentication
    </Header>
    <Segment attached>
      <b>Application overview.</b>
      <p>
        To-do with Authentication is a Full stack MERN
        (MongoDB,Express,React,NodeJS) to do list manager with React hooks,
        context & JWT authentication. For the UI layout I used Semantic UI
        react.
      </p>
    </Segment>

    <Divider />

    <p>
      <b>Usage:</b> Install client dependencies npm install npm client-install.
      Mongo connection setup Edit your /config/db.js file to include the correct
      MongoDB URI. Please note you need to create a .env file in the root of the
      application. This file should contain:
    </p>
    <List.Item as="ul">
      <List.Item as="li">
        {" "}
        <b>You need to provide your own credentials.</b>
      </List.Item>
      <List.Item as="li"> DB_USERNAME=</List.Item>
      <List.Item as="li">DB_PASSWORD=</List.Item>
      <List.Item as="li">DB_CLUSTER_NAME=</List.Item>
      <List.Item as="li">JWT_SECRET=</List.Item>
    </List.Item>

    <Divider />

    <Segment attached>
      <p>
        {" "}
        Run Server npm run dev # Express & React :3000 & :5000 npm run server #
        Express API Only :5000 npm run client # React Client Only :3000
      </p>
    </Segment>
  </div>
);

export default About;
