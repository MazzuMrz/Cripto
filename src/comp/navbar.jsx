import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Bar = () => {
  return (
    <div className="text-left">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand id="cripto" href="#home">CRIPTO WW</Navbar.Brand>
        <img
        src="https://images.vexels.com/media/users/3/144837/isolated/preview/40f189daa5c0279718484ca5f5569f78-icono-de-bitcoin-by-vexels.png"
        width="30"
        height="30"
        className="d-inline-block mr-auto ml-0 align-top"
        alt="React Bootstrap logo"
      />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ml-auto pl-3 pr-3 ">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Mi billetera</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link className=" bg-warning pl-3  mr-5" id="soporte" href="#pricing">Soporte tecnico</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Bar;
