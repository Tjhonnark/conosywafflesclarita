import React, { useState } from 'react';
import Link from 'next/link';
/* STYLES */
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

  const link = () => {
    var sound = new Audio('sounds/close.wav')
    sound.play()
  }
  
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <img src="/logo.png" className={styles.logo} alt="" width="10%" />
        <div className={styles.navbar}>
          <div className={styles.item}>
            <Link href="/" >
              <a aria-current="page" onClick={link}><i className="bi bi-house-fill"></i>Inicio</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/about">
              <a aria-current="page" onClick={link}><i className="bi bi-people-fill"></i>¿Quiénes somos?</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/products">
              <a aria-current="page" onClick={link}><i className="bi bi-box-seam"></i>Productos</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/contact">
              <a aria-current="page" onClick={link}><i className="bi bi-envelope-paper-fill"></i>Contactos</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

{/* <div className="navbar navbar-expand-lg navbar-dark fixed-top bg-light w-50" aria-label="Offcanvas navbar large">
          <div className="container-fluid bg-primary">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-white bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbar2Label"><img src="/logo.png" className={styles.logo} alt="" width="10%" />Conos y Waffles Clarita</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <ul className="navbar-nav flex-grow-1 pe-3 h5 bg-dark ">
                <div className="nav-item">
                  <Link href="/" >
                    <a className="nav-link" aria-current="page">Inicio</a>
                  </Link>
                </div>
                <div className="nav-item">
                  <Link href="/about">
                    <a className="nav-link" aria-current="page">¿Quiénes somos?</a>
                  </Link>
                </div>
                <div className="nav-item">
                  <Link href="/products">
                    <a className="nav-link" aria-current="page">Productos</a>
                  </Link>
                </div>
                <div className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link" aria-current="page">Contactos</a>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div> */}