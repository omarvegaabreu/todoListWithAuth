import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu, List } from "semantic-ui-react";

const NavBar = ({ title, icon }) => {
  return (
    // <List
    //   className="navbar bg-primary"
    //   horizontal
    //   animated
    //   size={"massive"}
    //   relaxed
    // >
    //   <List.Item active>
    //     <Link to="/">Home</Link>
    //   </List.Item>
    //   {/* <List.Item as="a"> */}
    //   <List.Item as="a">
    //     <Link to="/about">About</Link>
    //   </List.Item>
    // </List>
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
