import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Museu do Frontend</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/artworks">Obras de Arte</Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Time Based Media</NavDropdown.Item>
                        <NavDropdown.Item href="#">Materiais</NavDropdown.Item>
                        <NavDropdown.Item href="#">Equipment</NavDropdown.Item>
                        <NavDropdown.Item href="#">Painting</NavDropdown.Item>
                        <NavDropdown.Item href="#">Photograph</NavDropdown.Item>
                        <NavDropdown.Item href="#">Sculpture</NavDropdown.Item>
                        <NavDropdown.Item href="#">Icon</NavDropdown.Item>
                        <NavDropdown.Item href="#">Textile</NavDropdown.Item>
                        <NavDropdown.Item href="#">Furniture</NavDropdown.Item>
                        <NavDropdown.Item href="#">Decorative Arts</NavDropdown.Item>
                        <NavDropdown.Item href="#">Audio-Video</NavDropdown.Item>
                        <NavDropdown.Item href="#">Costume and Accessories</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </>
    )
}

export default Menu
