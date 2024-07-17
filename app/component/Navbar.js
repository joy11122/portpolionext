import React from "react";
import Link from "next/link";
const navbar = () => {
  return (
    <>
      <nav className="navbar  navbar-expand-sm fixed-top bg-light ">
        <div className=" container">
          <Link className="navbar-brand display-1 fw-bold text-danger" href="/">
            Joyanta Halder
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
          <div className="collapse cat navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link id="d" href="/" className="nav-link active ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link id="d" href="/About" className="nav-link active">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link id="d" href="/Contact" className="nav-link active">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link id="d" href="/" className="nav-link active">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link id="d" href="/Services" className="nav-link active">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
