import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg";
import cssIcon from "../../assets/icons/css-icon.svg";
import htmlIcon from "../../assets/icons/html-icon.svg";
import jsIcon from "../../assets/icons/js-icon.svg";
import arduinoIcon from "../../assets/icons/arduino-icon.svg";
import reactIcon from "../../assets/icons/react-icon.svg";
import typescriptIcon from "../../assets/icons/typescript-icon.svg";
import bootstrapIcon from "../../assets/icons/bootstrap-icon.svg";
import flaskIcon from "../../assets/icons/flask-icon.svg";
import mysqlIcon from "../../assets/icons/mysql-icon.svg";
import illustratorIcon from "../../assets/icons/illustrator-icon.svg";
import photoshopIcon from "../../assets/icons/photoshop-icon.svg";
import pythonIcon from "../../assets/icons/python-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Here's a little snippet about me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            A Highly Charismatic and Focus driven technologist trying to use her
            skills to contribute to changing social perspectives of engineering.
            My experience will allow me to become more well-rounded with a
            mastery in web development and management that will bolster my
            career.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I'm currently pursuing my Bachelors in Information and Technology at
            Loyola - Icam College of Engineering and Technology, Chennai.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            <em>"A million dreams is all it's gonna take.</em>
            <p>
              <em>
                Oh a million dreams for the world we're gonna make". Yes, I
                could see in you.
              </em>
            </p>
            <p>
              <em>Yes, I could see in you.</em>
            </p>
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Few things I'm skilled at:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={flaskIcon} alt="Flask" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={mysqlIcon} alt="MYSql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={bootstrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={illustratorIcon} alt="Illustrator" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={arduinoIcon} alt="Arduino" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={photoshopIcon} alt="Photoshop" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={pythonIcon} alt="Python" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img
            src="https://media4.giphy.com/media/MAWKf4CcnrwBk4tsr9/giphy.gif?cid=790b76119b8317c180d4c5835273ad434ff1054c8ca77d98&rid=giphy.gif&ct=s"
            alt="Imagem de perfil"
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
