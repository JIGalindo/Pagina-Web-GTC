import PropTypes from "prop-types";
import "./styles.css";

export const AppGTC = () => {
  return (
    <>
      <div className="container">
        <div className="element element1">#1</div>
        <div className="element element2">#2</div>
        <div className="element element3">#3</div>
      </div>
    </>
  );
};
AppGTC.propTypes = {
  title: PropTypes.string.isRequired,
};
