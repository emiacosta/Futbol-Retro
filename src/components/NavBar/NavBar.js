import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" style={{backgroundColor: "#090953"}}>
      <Container>
        <Navbar.Brand href="#" className="logo">Fútbol Retro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
        <Nav.Link href="camisetas" className="seccionesNav">Camisetas</Nav.Link>
        <Nav.Link href="shorts" className="seccionesNav">Shorts</Nav.Link>
        <Nav.Link href="buzos" className="seccionesNav">Buzos</Nav.Link>
        <Nav.Link href="botines" className="seccionesNav">Botines</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;