import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className="bgnav border border-primary">
      <Navbar>
        <Container>
          <Navbar.Brand>
            <i className="bi bi-patch-check-fill iconbg"></i>
          </Navbar.Brand>
          <div className="border border-primary">
            <b className="me-3">
              <Nav>
                <Nav.Link
                  className="uk border text-dark border-warning"
                  href="#metode"
                >
                  Work Out
                </Nav.Link>
                <Nav.Link className="uk border text-dark border-warning">
                  Metode Gym
                </Nav.Link>
                <Nav.Link className="uk border text-dark border-warning">
                  Benefit Gym
                </Nav.Link>
              </Nav>
            </b>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
