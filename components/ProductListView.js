/* STYLES */
import styles from '../styles/ProductListView.module.css'

const ProductListView = ({ product, productToggleSelect }) => {
    return (
        <div className={styles.card} key={product.id}>
            <figure>
                <img src={product.image} alt="" />
            </figure>
            <h3>{product.name}</h3>
            <button onClick={() => productToggleSelect(product.id)}>Agregar</button>
        </div>
    )
}

export default ProductListView;