import { Container, Jumbotron } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <div className="footer"></div>
      <div className="garistepi border border-info" id="metode"></div>
      <div class="jumbotron">
        <div class="container">
          <div className="avatar"></div>
          <h1 class="textmetode">Metode On Gym</h1>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
