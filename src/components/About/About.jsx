import Image from "../Image";

import "./About.css";

function About() {
  return (
    <div id="about" className="about-me">
      <Image />
      <h2>
        Nice to meet you!
        <br />
        I'm Michael Dawson
      </h2>
      <p>
        I am frontend developer based in the UK with a passion for building web
        applications.
      </p>
    </div>
  );
}

export default About;
