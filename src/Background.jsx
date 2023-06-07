import "./App.css";
import PropTypes from "prop-types";

function Background({ animating }) {
  return (
    <>
      <div
        className={`background ${
          animating ? "background-animating" : "background-paused"
        }`}
      />
    </>
  );
}

export default Background;
Background.propTypes = {
  animating: PropTypes.bool.isRequired,
};
