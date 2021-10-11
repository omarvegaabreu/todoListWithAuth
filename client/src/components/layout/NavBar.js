import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import AuthContext from "../../context/auth/authContext";

const NavBar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;
  let userName;

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (user !== null && user !== undefined) {
    userName = user.name;
  } else {
    userName = "";
  }
  return (
    <Menu stackable className="navbar">
      <Menu.Item color="teal">
        <Icon color="blue" name={icon} size="big" />
        <p>{title}</p>
      </Menu.Item>
      <Menu.Item color="teal" as={Link} to="/" name="home" />
      <Menu.Item as={Link} to="/login" name="login" />
      <Menu.Item as={Link} to="/register" name="register" />
      <Menu.Item as={Link} to="/about" name="about" />
      <p>{userName} add things to do.</p>
    </Menu>
  );
};

//type check for props
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

//Default Props
NavBar.defaultProps = {
  title: " To-do",
  icon: "clipboard list",
};

export default NavBar;
