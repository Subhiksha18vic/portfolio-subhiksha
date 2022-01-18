import { Container } from "./styles";
import emailIcon from "../../assets/icons/email-icon.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Reach out to me</h2>
        <p>Share your story with me? I'd be happy to work with you!</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:esubivictoria129@gmail.com.com">
            esubivictoria129@gmail.com
          </a>
        </div>
      </div>
    </Container>
  );
}
