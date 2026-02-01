'use client';

import Link from 'next/link';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

export default function Navbar() {
  return (
    <BSNavbar
      expand="lg"
      className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <Container>
        <BSNavbar.Brand as={Link} href="/" className="d-inline-flex">
          <span className="text-1000 fs-0 fw-bold ms-2">L&N Shop</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarSupportedContent" />
        <BSNavbar.Collapse id="navbarSupportedContent" className="border-top border-lg-0 mt-4 mt-lg-0">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link
              href="#categoryWomen"
              className="fw-medium active px-2"
              aria-current="page"
            >
              Women
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
