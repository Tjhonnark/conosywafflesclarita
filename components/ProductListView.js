import Image from 'next/image'
/* STYLES */
import styles from '../styles/ProductListView.module.css'

const ProductListView = ({ product, productToggleSelect }) => {
    return (
        <button id={product.id} key={product.id}
        className={product.select?styles.card_select:styles.card}
        onClick={() => productToggleSelect(product.id)}
        >
            <Image 
                className={styles.image}
                src={product.image}
                alt=""
                width={350}
                height={240}
                objectFit="cover"
            />
            <div className={styles.card_text}>
                <h3>{product.name}</h3>
            </div>
        </button>
    )
}

export default ProductListView;