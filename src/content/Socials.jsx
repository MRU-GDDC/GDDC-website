import "../App.css";
import discord from "../assets/icons/discord.png";
import instagram from "../assets/icons/instagram.png";

function Socials() {
  return (
    <section>
      <h2>Socials</h2>
      <a
        href="https://www.instagram.com/mru.gddc/"
        className="social-link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="Instagram Logo" /> @mru.gddc on Instagram
      </a>
      <a
        href="https://discord.gg/PqhHhbhsu2"
        className="social-link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={discord} alt="Discord Logo" />
        MRU GDDC on Discord
      </a>
    </section>
  );
}

export default Socials;
