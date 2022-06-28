import styles from '../styles/Products.module.css'

export default function Products() {
    return (
        <div className={styles.body}>
            <section className={styles.products}>
                <h1>Productos</h1>
                <div className={styles.card}>
                    <div className={styles.card_image1}>
                    </div>
                    <h3>Product</h3>
                    <a href="">Read more</a>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_image2}>
                    </div>
                    <h3>Product</h3>
                    <a href="">Read more</a>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_image3}>
                    </div>
                    <h3>Product</h3>
                    <a href="">Read more</a>
                </div>
            </section>
        </div>
    )
} 