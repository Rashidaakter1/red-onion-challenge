import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png'
import cart from '../../../images/icons/cart.webp'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container className='' >
                    <Navbar.Brand className=''>
                       <Link to='/'> <img style={{ 'height': '30px' }} src={logo} alt="" /></Link>
                    </Navbar.Brand>
                    <Nav className='d-flex justify-content-evenly align-items-center'>
                        <a className ="navbar-brand" href="#">
                            <img src={cart} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                            
                        </a>
                        <Link to='/login'>LogIn</Link>
                        <Link  className='btn text-white px-3' to='/signup'>Sign-Up</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;