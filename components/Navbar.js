import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" aria-label="Offcanvas navbar large">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Conos y Waffles Clarita</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-white bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Conos y Waffles Clarita</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link href="/" >
                  <a className="nav-link" aria-current="page">Inicio</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link" aria-current="page">¿Quiénes somos?</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/products">
                  <a className="nav-link" aria-current="page">Productos</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link" aria-current="page">Contactos</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}