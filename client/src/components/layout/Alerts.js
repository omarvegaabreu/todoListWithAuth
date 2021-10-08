import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { Message } from "semantic-ui-react";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return alertContext.alerts.map((alert) => {
    return (
      <Message negative>
        <Message.Header>{alert.msg}</Message.Header>
      </Message>
    );
  });
};

export default Alerts;
