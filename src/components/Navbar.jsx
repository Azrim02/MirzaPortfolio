import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import '../styles/navbar.scss';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./pages/Home.jsx">
            <img
              alt="logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Mirza Shariman
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
            <Nav className="ms-auto">
              <Nav.Link href="./pages/Home.jsx" active>Home</Nav.Link>
              <Nav.Link href="./pages/Contact.jsx">Contact</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Project A
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Project B
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Project C
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Skills & Learning" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Skill A
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Skill B
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Skill C
                </NavDropdown.Item>
              </NavDropdown>

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