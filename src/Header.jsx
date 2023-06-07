import "./App.css";
import banner from "./assets/gdd-blue-banner.png";
import PropTypes from "prop-types";

function Header({ animating, setAnimating }) {
  return (
    <header>
      <h1>Game Design and Development Club of Mount Royal University</h1>
      <button
        className="bg-toggle-button"
        onClick={() => setAnimating(!animating)}
      >
        {animating ? "Pause Background" : "Play Background"}
      </button>
      <img
        src={banner}
        alt="Game Design and Development Club of Mount Royal University"
      />
    </header>
  );
}

export default Header;

Header.propTypes = {
  animating: PropTypes.bool.isRequired,
  setAnimating: PropTypes.func.isRequired,
};
