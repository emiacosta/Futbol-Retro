import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
        <NavLink to='/' className={"logo"}>
          <h1>Fútbol Retro</h1>
      </NavLink>
        <div className="Categories">
            <NavLink to={'/category/camisetas'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink>
            <NavLink to={'/category/shorts'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink>
            <NavLink to={'/category/buzos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Buzos</NavLink>
            <NavLink to={'/category/botines'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Botines</NavLink>
        </div>
        <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;