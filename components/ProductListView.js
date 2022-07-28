/* STYLES */
import styles from '../styles/ProductListView.module.css'

const ProductListView = ({ product, productToggleSelect }) => {
    return (
        <div id={product.id} className={product.select?styles.card_select:styles.card} key={product.id}>
            <figure>
                <img src={product.image} alt="" />
            </figure>
            <div className={styles.card_text}>
                <h3>{product.name}</h3>
                <button onClick={() => productToggleSelect(product.id)}>Agregar</button>
            </div>
        </div>
    )
}

export default ProductListView;