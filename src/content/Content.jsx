import "../App.css";
import Executives from "./Executives";
import FeaturedWork from "./FeaturedWork";
import Socials from "./Socials";
import WhatsNew from "./WhatsNew";

function Content() {
  return (
    <article>
      <FeaturedWork />
      <hr />
      <WhatsNew />
      <hr />
      <Executives />
      <hr />
      <Socials />
    </article>
  );
}

export default Content;
