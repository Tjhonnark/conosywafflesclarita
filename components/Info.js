import Link from 'next/link'
/* STYLES */
import styles from '../styles/Info.module.css'

const Info = (props) => {

    return (
        <>
            <h3>Más información</h3>
            <div className={styles.contact_item}>

                <a
                    href="https://goo.gl/maps/svdAaoiHsp77zHiUA"
                    target="_blank"
                >
                    <i className="bi bi-geo-alt-fill"></i>
                    Edificio ACJ, Urbanización Villa María, Río Abajo, Ciudad Panamá
                </a>
            </div>
            <div className={styles.contact_item}>
                <a href="tel:+50767780290">
                    <i className="bi bi-telephone-forward-fill"></i>
                    000-0000
                </a>
            </div>
            <div className={styles.contact_item}>
                <a
                    href="mailto:conomovil_pa@yahoo.com"
                    target="_blank"
                >
                    <i className="bi bi-envelope-fill"></i>
                    conomovil_pa@yahoo.com
                </a>
            </div>
            <p>{props.text}</p>
        </>
    )
}

export default Info;