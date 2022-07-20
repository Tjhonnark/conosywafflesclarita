import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                /* href="#" */
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <h3 className={styles.webapp}>WebApp</h3>
            </a>
        </footer>
    )
}