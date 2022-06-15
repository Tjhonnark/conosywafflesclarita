import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <a
                href="google.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <h3 className={styles.webapp}>WebApp</h3>
            </a>
        </div>
    )
}