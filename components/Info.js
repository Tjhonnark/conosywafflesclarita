/* STYLES */
import styles from '../styles/Info.module.css'

const Info = () => {

    return (
        <>
            <div className={styles.contact_info}>
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
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil temporibus voluptas? Suscipit, error adipisci fugit ab architecto obcaecati nostrum cum nam doloribus asperiores eaque natus ipsam maxime placeat ratione.</p>
        </>
    )
}

export default Info;