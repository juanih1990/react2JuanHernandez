import "./Index.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-body-tertiary">
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/categoria/Hogar">Hogar</Nav.Link>
                <Nav.Link href="/categoria/Informatica">Informatica</Nav.Link>
                <Nav.Link href="/categoria/CuidadoPersonal">Cuidado personal</Nav.Link>
                <Nav.Link href="/categoria/Climatizacion">Climatizacion</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}
export default NavBar