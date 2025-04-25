import PropTypes from "prop-types";

export const AppGTC = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
AppGTC.propTypes = {
  title: PropTypes.string.isRequired,
};
