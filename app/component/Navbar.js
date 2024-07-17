import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-light">
      <div className="container">
        <Link href="/" passHref>
          <a className="navbar-brand display-1 fw-bold text-danger">Joyanta Halder</a>
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link active">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/About" passHref>
                <a className="nav-link active">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Contact" passHref>
                <a className="nav-link active">Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Blog" passHref>
                <a className="nav-link active">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Services" passHref>
                <a className="nav-link active">Services</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
