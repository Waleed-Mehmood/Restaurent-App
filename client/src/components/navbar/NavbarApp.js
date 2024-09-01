import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../helloFood.png";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbar-border-bottom navbar-primary"
    >
      <Container>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={Logo}
                width="180"
                height="70"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="mx-3 nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="mx-3 nav-link-custom">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="mx-3 nav-link-custom">
              <FaShoppingCart size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
