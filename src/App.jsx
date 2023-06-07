import "./App.css";

import Header from "./Header";
import Content from "./content/Content";
import Footer from "./Footer";
import Background from "./Background.jsx";

import { useState } from "react";

function App() {
  const [animating, setAnimating] = useState(true);

  return (
    <>
      <main>
        <Background animating={animating} />
        <Header animating={animating} setAnimating={setAnimating} />
        <Content />
        <Footer />
      </main>
    </>
  );
}

export default App;
