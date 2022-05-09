import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <Navbar className='main-nav' collapseOnSelect expand="lg" sticky='top' bg="transparent" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} height="30" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <h4 className='text-light'>Ashik Gym Equipments</h4>



          </Nav>


          <Nav>
            <Nav.Link className='text-light' as={Link} to="home">Home</Nav.Link>
            <Nav.Link className='text-light' href="home#equipments">Equipments</Nav.Link>
            <Nav.Link className='text-light' as={Link} to="blog">Blog</Nav.Link>
            {
              user && <>
                <Nav.Link className='text-light' as={Link} to="manageinventory">Manage Inventory</Nav.Link>

                <Nav.Link className='text-light' as={Link} to="addequipment">Add Equipment</Nav.Link>
                

                <Nav.Link className='text-light' as={Link} to="myitems">My Items</Nav.Link>

              </>
            }

            {
              user
                ?
                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                :
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;