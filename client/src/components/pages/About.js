import React from "react";
import { Container, Divider } from "semantic-ui-react";

const About = () => (
  <div>
    <Container textAlign="center">Center Aligned</Container>

    <Container textAlign="justified">
      <b>Application overview.</b>
      <Divider />
      <p>
        The application uses several technologies in order to complete our
        vision. We will be able to: Securely log in as administrators giving the
        application users peace of mind given that only registered users will be
        able to access their information. Cars can be added and viewed in the
        App allowing the user to know how many cars are in the system. The
        payment system is completely automated; this will allow for easier and
        faster checkout. The user will be able to notify via text, the guests
        that the cars are ready to be picked up. The guest will get a QR code
        notification in order to pick up the car. This is an additional security
        feature, that will limit human error. We integrated React as the View
        layer, MongoDB, Express.js, Node.js in the backend. Using the MVC
        paradigm to produce a full-stack MERN application. In the client side we
        used the React lifecycle methods to follow best practices to render our
        application to the React Dom. Asynchronous request (AJAX) calls to
        transport data as JSON text from the data base and several API's used in
        the project. In the backend we used CRUD operations to manage the
        database and also followed best practices on our server side in order to
        make the application run smoothly and error free. #Technologies used
        MERN stack. Bcrypt for password encryption. Twilio API to send text
        messages. Stripe API for credit card payment. React chart.js for
        rendering charts. QR-code-React to generate the code in the text
        message. Bootstrap and Material Design in the HTML. SASS in our CSS
        libraries. Open weather API to show the weather in the application.
        Moment JS to show the times. Passport for login authentication. Node
        mailer. SendGrid
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
    </Container>
  </div>
);

export default About;
