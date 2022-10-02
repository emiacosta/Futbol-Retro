import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse.js";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle.js";
import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <Navbar expand="lg">
      <Container>
        <h1 href="#" className="logo">Fútbol Retro</h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <h5 href="camisetas" className="seccionesNav">Camisetas</h5>
        <h5 href="shorts" className="seccionesNav">Shorts</h5>
        <h5 href="buzos" className="seccionesNav">Buzos</h5>
        <h5 href="botines" className="seccionesNav">Botines</h5>
        <CartWidget/>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;