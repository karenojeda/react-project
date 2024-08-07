import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = ({ handleShowModal }) => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/">
        Cineté
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={() => handleShowModal("watchlist")}>Watchlist</Nav.Link>
          <Nav.Link onClick={() => handleShowModal("favorites")}>Favorites</Nav.Link>
          <Nav.Link onClick={() => handleShowModal("watched")}>Watched</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
