import Forms from '../components/Forms.js';
/* STYLES */
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.body}>
            <h1>Contáctenos <span>CONOMOVÍL</span></h1>
            <section className={styles.contact}>
                <div className={styles.contact_form}>
                    <Forms />
                </div>
                <div className={styles.info}>
                    <h3>More info</h3>
                    <ul>
                        <li><i className="bi bi-geo-alt-fill"></i>Edificio ACJ, Urbanización Villa María, Río Abajo, Ciudad Panamá</li>
                        <li><i className="bi bi-telephone-fill"></i>000-0000</li>
                        <li><i className="bi bi-envelope-fill"></i>conomovil_pa@yahoo.com</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil temporibus voluptas? Suscipit, error adipisci fugit ab architecto obcaecati nostrum cum nam doloribus asperiores eaque natus ipsam maxime placeat ratione.</p>
                </div>
            </section>
        </div>
    )
} 