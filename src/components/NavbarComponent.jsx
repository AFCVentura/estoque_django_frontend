import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="d-flex gap-2">
            <i className="bi bi-boxes"></i>
            Gerenciador de Estoques 3000
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/estoques">Estoques</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
