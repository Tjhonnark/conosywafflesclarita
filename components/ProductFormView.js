import styles from '../styles/ProductFormView.module.css'

export default function ProductFormView({ product, productToggleSelect }) {
    return (
        <>
            {product.select ?
                <div className={styles.product}>
                    <div type='text' name="product" className={styles.name}>
                        {product.name}
                    </div>
                    <button
                        className={styles.button}
                        onClick={() => productToggleSelect(product.id)}
                    >
                        <i className="bi bi-x-circle-fill"></i>
                    </button>
                </div>
                : ""}
        </>
    )
}