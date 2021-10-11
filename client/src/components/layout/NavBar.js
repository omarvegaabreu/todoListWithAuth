import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const NavBar = ({ title, icon }) => {
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
