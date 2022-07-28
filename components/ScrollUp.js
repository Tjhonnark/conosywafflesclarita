/* STYLES */
import styles from '../styles/ScrollUp.module.css'

const ScrollUp = ({ scrollUpFunction, styleScrollUp }) => {

    return (
        <button
            className={styleScrollUp ? styles.scrollUp2 : styles.scrollUp}
            onClick={scrollUpFunction}>
            <i class="bi bi-arrow-up-short"></i>
        </button>
    )
}
export default ScrollUp;