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
        👋 Hi, I’m Michael Dawson — a frontend developer based in the UK who enjoys building fast, accessible web apps. I’ve built full-stack projects using JavaScript, React, and Node.js, and recently completed a remote internship where I contributed production-ready features using Next.js, Prisma, and Stripe. I focus on clean UI, responsiveness, and real-world problem solving.
      </p>
    </div>
  );
}

export default About;
