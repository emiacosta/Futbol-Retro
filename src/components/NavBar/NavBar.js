import { Navbar, Container } from "react-bootstrap";
import CartWidget from '../CartWidget/CartWidget.js';
import SeccionesNavBar from "../SeccionesNavBar/SeccionesNavBar.js";
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <h1 href="#" className="logo">Fútbol Retro</h1>
          <SeccionesNavBar/>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;