import { Avatar, Button, Menu, MenuItem } from '@material-ui/core';
import { sign } from 'jsonwebtoken';
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth, isLoggedIn, loggedInInfo, signOut } from '../LogIn/LoginManager';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand href="/home" className="shop">GADGET SHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link text-white" to="/home">Home</Link>
                            <Link className="nav-link text-white" to="/order">Order</Link>
                            <Link className="nav-link text-white" to="/home">Deals</Link>
                            <Link className="nav-link text-white" to="/admin">Admin</Link>
                            {
                                auth.currentUser?.email ? <Link className="nav-link">
                                    <div>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                            <Avatar alt="Remy Sharp" src={auth.currentUser?.photoURL} />
                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={() => {
                                                handleClose()
                                                signOut()
                                            }}>Logout</MenuItem>
                                        </Menu>
                                    </div>
                                </Link> : <Link className="nav-link text-white" to="/login">Login</Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div>
    );
};

export default Header;