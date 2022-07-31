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
              <a aria-current="page" ><i className="bi bi-house-fill"></i>Inicio</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/about">
              <a aria-current="page" ><i className="bi bi-people-fill"></i>¿Quiénes somos?</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/products">
              <a aria-current="page" ><i className="bi bi-box-seam"></i>Productos</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/contact">
              <a aria-current="page" ><i className="bi bi-envelope-paper-fill"></i>Contactos</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}