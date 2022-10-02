import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">Fútbol Retro Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
        <Nav.Link href="camisetas">Camisetas</Nav.Link>
        <Nav.Link href="shorts">Shorts</Nav.Link>
        <Nav.Link href="buzos">Buzos</Nav.Link>
        <Nav.Link href="botines">Botines</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;