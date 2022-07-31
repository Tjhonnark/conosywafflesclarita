/* STYLES */
import styles from '../styles/MapView.module.css'

const MapView = () => {

    return (
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.706722108722!2d-79.51650698567366!3d8.999110791935284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9ab3c080d01%3A0xd27b71aeab996f8a!2sP.H.%20Vista%20Bella%20Park%2C%20Escuela%20Puerto%20Rico%2C%20C.%2065%20C%20Este%2C%20Panam%C3%A1!5e0!3m2!1ses-419!2spa!4v1658986988656!5m2!1ses-419!2spa"
             width="100%" height="100%" className={styles.map}
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">
             </iframe>
        </>
    )
}

export default MapView;