import "./App.css";
import banner from "./assets/gdd-blue-banner.png";

function Header() {
  return (
    <header>
      <h1>Game Design and Development Club of Mount Royal University</h1>
      <img
        src={banner}
        alt="Game Design and Development Club of Mount Royal University"
      />
    </header>
  );
}

export default Header;
