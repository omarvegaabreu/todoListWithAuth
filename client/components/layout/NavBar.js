import PropTypes from "prop-types";

const NavBar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <icon className={icon}>{title}</icon>
      </h1>
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
  title: "Todo0",
  icon: "fa-list-ul",
};
