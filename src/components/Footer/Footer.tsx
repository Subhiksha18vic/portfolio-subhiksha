import { Container } from "./styles";

import linkedinIcon from "../../assets/footer/linkedin.png";
import githubIcon from "../../assets/footer/github.png";
import instagramIcon from "../../assets/footer/instagram.png";
import twitterIcon from "../../assets/footer/twitterIcon.png";
import devIcon from "../../assets/footer/dev-icon.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>S</span>
        <span>ubhikshaVictoria</span>
      </a>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/elizabeth-subhiksha-victoria-b3a661193/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://dev.to/subhiksha_victoria"
          target="_blank"
          rel="noreferrer"
        >
          <img src={devIcon} alt="DevTo" />
        </a>

        <a
          href="https://twitter.com/SubiVictoria"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>

        <a
          href="https://github.com/Subhiksha18vic"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/elishaa_victoria/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
