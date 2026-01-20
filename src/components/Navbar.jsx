import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            {/* <img
              alt="logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '} */}
            Mirza Shariman
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/entries">Entries</Nav.Link>
              {/* <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/projects/a">
                  Project A
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/projects/b">
                  Project B
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/projects/c">
                  Project C
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='divider'>
      </div>
    </div>
  );
}

export default NavBar;