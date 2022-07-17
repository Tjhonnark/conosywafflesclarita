import styles from '../styles/ProductFormView.module.css'

export default function ProductFormView({ product, productToggleSelect }) {
    return (
        <>
            {product.select ?
                <div className={styles.product}>
                    <div className={styles.name}>
                        {product.name}
                    </div>
                    <button
                        className={styles.button}
                        onClick={() => productToggleSelect(product.id)}
                    >
                        <i class="bi bi-x-circle-fill"></i>
                    </button>
                </div>
                : ""}
        </>
    )
}