import { useState } from 'react'
/* COMPONENTS */
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
/* DATA */
import { initialProducts } from '../components/data/dataProducts'
/* STYLES */
import styles from '../styles/Products.module.css'

export default function Products() {

    const [products, setProducts] = useState(initialProducts);

    const productToggleSelect = (productId) => {

        /* const changedProducts = products.map(product => {
            
            const productEdit = {
                ...product,
                select: !product.select
            }

            if (product.id === productId) {
                return productEdit
            } else {
                return product
            }
        }) */

        const changedProducts = products.map(product => (
            product.id === productId
                ? { ...product, select: !product.select }
                : product
        ));

        setProducts(changedProducts)
    }

    return (
        <div className={styles.body}>
            <div className={styles.productList}>
                <h1>Productos</h1>
                <ProductList
                    products={products}
                    productToggleSelect={productToggleSelect}
                />
            </div>
            <ProductForm
                products={products}
                productToggleSelect={productToggleSelect}
            />
        </div>
    )
}

