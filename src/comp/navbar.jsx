import React from "react";
import { Navbar } from "react-bootstrap";

const Bar = () => {
  return (
    <div className="text-left">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand id="cripto" href="#home">
          CRIPTO 
        </Navbar.Brand>
        
        <img
          src="https://images.vexels.com/media/users/3/144837/isolated/preview/40f189daa5c0279718484ca5f5569f78-icono-de-bitcoin-by-vexels.png"
          width="30"
          height="30"
          className="d-inline-block mr-auto ml-0 align-top"
          alt="React Bootstrap logo"
        />
        
        
        
       
      </Navbar>
    </div>
  );
};

export default Bar;
