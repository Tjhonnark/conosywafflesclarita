/* STYLES */
import styles from '../styles/Info.module.css'

const Info = (props) => {

    return (
        <>
            <h3>Más información</h3>
            <div className={styles.contact_item}>
                <i className="bi bi-geo-alt-fill"></i>
                Edificio ACJ, Urbanización Villa María, Río Abajo, Ciudad Panamá
            </div>
            <div className={styles.contact_item}>
                <i className="bi bi-telephone-forward-fill"></i>
                <a href="tel:+50767780290">000-0000</a>
            </div>
            <div className={styles.contact_item}>
                <i className="bi bi-envelope-fill"></i>
                conomovil_pa@yahoo.com
            </div>
            <p>{props.text}</p>
        </>
    )
}

export default Info;