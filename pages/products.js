import { useState } from 'react'
/* COMPONENTS */
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import FormSend from '../components/modals/FormSend'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
/* DATA */
import { initialProducts } from '../components/data/dataProducts'
/* STYLES */
import styles from '../styles/Products.module.css'

export default function Products() {

    const [products, setProducts] = useState(initialProducts);

    const [modalFormSend, setModalFormSend] = useState(false);

    const productToggleSelect = (productId) => {

        const changedProducts = products.map(product => (
            product.id === productId
                ? { ...product, select: !product.select }
                : product
        ));

        setProducts(changedProducts)
    }

    return (
        <div className={styles.body}>
            <Navbar />
            <div className={styles.productList}>
                <ProductList
                    products={products}
                    productToggleSelect={productToggleSelect}
                />
            </div>
            <ProductForm
                products={products}
                productToggleSelect={productToggleSelect}
                modalFormSend={modalFormSend} setModalFormSend={setModalFormSend}
            />
            <FormSend modalFormSend={modalFormSend} setModalFormSend={setModalFormSend} />
            <Footer />
        </div>
    )
}

