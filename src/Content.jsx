import "./App.css";

function Content() {
  return (
    <article>
      <section>
        <h2>Featured Work</h2>
        <img
          src="https://via.placeholder.com/640x480.png?text=Content+Coming+Soon"
          alt="Placeholder"
        />
        <p>
          Hold your horses! We&apos;re still working on this page. Check back
          soon for updates on future events and projects.
        </p>
      </section>
      <hr />
      <section>
        <h2>What&apos;s New?</h2>
        <p>
          <strong>2023-05-24</strong> - We are excited to announce that we are
          officially ratified as a club at Mount Royal University! We are
          currently working on planning some great events, some fun workshops,
          and some awesome projects. Check back soon for more information!
        </p>
      </section>
      <section>
        <h2>Socials</h2>
        <a href="https://www.instagram.com/mru.gddc/" className="social-link">
          <img
            src="https://via.placeholder.com/128x128.png?text=Instagram+Logo"
            alt="Instagram Logo"
          />{" "}
          @mru.gddc on Instagram
        </a>
        <a href="https://discord.gg/" className="social-link">
          <img
            src="https://via.placeholder.com/128x128.png?text=Discord+Logo"
            alt="Discord Logo"
          />
          MRU GDDC on Discord
        </a>
      </section>
    </article>
  );
}

export default Content;
