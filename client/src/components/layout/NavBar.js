import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu, List } from "semantic-ui-react";

const NavBar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <icon className={icon}>{title}</icon>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
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
  icon: "fa fa-th-list ",
};

export default NavBar;
