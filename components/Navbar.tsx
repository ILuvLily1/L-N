'use client';

import Link from 'next/link';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const FACEBOOK_URL = 'https://www.facebook.com/share/1MeiH782o3/?mibextid=wwXIfr';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <BSNavbar
      expand="lg"
      className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <Container className="d-flex flex-nowrap align-items-center justify-content-between w-100">
        <BSNavbar.Brand as={Link} href="/" className="d-inline-flex">
          <span className="text-1000 fs-0 fw-bold ms-2">L&N Shop</span>
        </BSNavbar.Brand>
        <BSNavbar.Collapse id="navbarSupportedContent" className="border-top border-lg-0 mt-4 mt-lg-0 flex-grow-1">
          <Nav className="mb-2 mb-lg-0">
            <Nav.Link
              href="#categoryWomen"
              className="fw-medium active px-2"
              aria-current="page"
            >
              Women
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-1000 text-decoration-none p-2 ms-2"
          aria-label="Facebook"
        >
          <FacebookIcon className="text-1000" />
        </a>
      </Container>
    </BSNavbar>
  );
}
