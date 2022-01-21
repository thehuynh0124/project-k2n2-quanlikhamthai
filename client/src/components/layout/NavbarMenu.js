import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const NavbarMenu = () => {
  return (
      <Navbar expand = 'lg' bg = 'primary' variant = 'dark' className = 'shadow'>
          <Navbar.Brand className = 'font-weight-bolder text-white'>
            Quản lý mang thai
          </Navbar.Brand>
          <Navbar.Toggle aria-controls = 'basic-navbar-nav' />
          <Navbar.Collapse id = 'basic-navbar-nav'>
              <Nav className = 'mr-auto'>
                  <Nav.Link className='font-weight-bolder text-white' to='/dashboard' as={Link}>
                      Dashboard
                  </Nav.Link>
                  <Nav.Link className='font-weight-bolder text-white' to='/about' as={Link}>
                      About
                  </Nav.Link>
                  <Nav>

                  </Nav>
                  <Nav.Link className='font-weight-bolder text-white' disable>
                      Welcome
                  </Nav.Link>
                  <Button variant='secondary' className='font-weight-bolder text-white'>
                      Logout
                  </Button>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
};

export default NavbarMenu;
