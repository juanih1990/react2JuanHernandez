import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Cart from '../CartWidget/Cart';
import styles from "./style.module.css"
const NavBar = () => {
  

  return (
    <div className="d-flex justify-content-between align-items-center bg-body-tertiary">
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container className="d-flex justify-content-between">
          <Link className={`${styles['Link']} m-2`} to="/categoria/SHOP">SHOP</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className={`${styles['Link']} m-2`} to="/categoria/Hogar">Hogar</Link>
              <Link className={`${styles['Link']} m-2`} to="/categoria/Informatica">Informatica</Link>
              <Link className={`${styles['Link']} m-2`} to="/categoria/CuidadoPersonal">Cuidado personal</Link>
              <Link className={`${styles['Link']} m-2`} to="/categoria/Climatizacion">Climatizacion</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart/>
    </div>
  )
}
export default NavBar