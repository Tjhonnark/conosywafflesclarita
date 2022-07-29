import Link from 'next/link'
/* COMPONENTS */
import Info from './Info';
/* DATA */
import { initialProducts } from './data/dataProducts';
/* STYLES */
import styles from '../styles/Footer.module.css';

export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.linkPages}>
                    <h4>Pagínas</h4>
                    <div className={styles.itemPages}>
                        <Link href="/" >
                            <a aria-current="page"><i className="bi bi-house-fill"></i>Inicio</a>
                        </Link>
                    </div>
                    <div className={styles.itemPages}>
                        <Link href="/about">
                            <a aria-current="page"><i className="bi bi-people-fill"></i>¿Quiénes somos?</a>
                        </Link>
                    </div>
                    <div className={styles.itemPages}>
                        <Link href="/products">
                            <a aria-current="page"><i className="bi bi-box-seam"></i>Productos</a>
                        </Link>
                    </div>
                    <div className={styles.itemPages}>
                        <Link href="/contact">
                            <a aria-current="page"><i className="bi bi-envelope-paper-fill"></i>Contactos</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.linkSection}>
                    <h4>Secciones</h4>
                    <div className={styles.itemSection}>
                        <Link href={props.page + "#section1"} >
                            <a aria-current="page">{props.section1}</a>
                        </Link>
                    </div>
                    <div className={styles.itemSection}>
                        <Link href={props.page + "#section2"} >
                            <a aria-current="page">{props.section2}</a>
                        </Link>
                    </div>
                    <div className={styles.itemSection}>
                        <Link href={props.page + "#section3"} >
                            <a aria-current="page">{props.section3}</a>
                        </Link>
                    </div>
                    <div className={styles.itemSection}>
                        <Link href={props.page + "#section4"} >
                            <a aria-current="page">{props.section4}</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.linkProduct}>
                    <h4>Productos</h4>
                    <div className={styles.items}>
                        {
                            initialProducts.map((product) => {
                                return (
                                    <div className={styles.itemProduct}>
                                        <Link href={"/products#" + product.id} >
                                            <a aria-current="page">{product.name}</a>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.info}>
                    <Info 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda tenetur cupiditate iure dolor voluptatibus consequuntur suscipit magni, ipsa illum doloribus autem ratione officiis beatae error quos, ab aliquam eum?"
                    />
                </div>
            </div>
            <div className={styles.webapp}>
                <a
                    href="https://www.tjhonnar.ga"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <h3 className={styles.webapp_title}>WebApp</h3>
                </a>
            </div>
        </footer>
    )
}