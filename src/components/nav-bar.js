import { NavLink as Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap-v5';
const NavBar = () => {
  return (
    <Navbar sticky='top' bg='dark' variant='dark '>
      <Nav className=' fs-5 justify-content-evenly w-100'>
        <Nav.Link exact as={Link} to='/'>
          Home
        </Nav.Link>
        <Nav.Link exact as={Link} to='/about'>
          About
        </Nav.Link>

        <Nav.Link exact as={Link} to='/register'>
          Register
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
