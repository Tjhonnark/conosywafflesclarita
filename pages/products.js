import { useState, useEffect } from 'react'
/* COMPONENTS */
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import FormSend from '../components/modals/FormSend'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'
/* DATA */
import { initialProducts } from '../components/data/dataProducts'
/* STYLES */
import styles from '../styles/Products.module.css'

export default function Products({ scrollUpFunction, styleScrollUp }) {

    const [products, setProducts] = useState(initialProducts);

    const [modalForm, setModalForm] = useState(false);

    const [modalFormSend, setModalFormSend] = useState(false);

    const productToggleSelect = (productId) => {

        const changedProducts = products.map(product => (
            product.id === productId
                ? { ...product, select: !product.select }
                : product
        ));

        setProducts(changedProducts)
    }

    // Sound effect to cart
    const cart = () => {
        setModalForm(!modalForm)
        var sound = new Audio('sounds/cart.wav')
        sound.play();
        sound.volume = 0.2;
    }

    // Ocultar carrito

    const [styleCart, setStylesCart] = useState(false);

    useEffect(() => {
        addEventListener('scroll', (event) => {
            var scroll = document.documentElement.scrollTop;
            if (scroll > 1205) {
                setStylesCart(true);
            } else {
                setStylesCart(false);
            }
        });
    }, [])

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
                modalFormSend={modalFormSend}
                setModalFormSend={setModalFormSend}
                modalForm={modalForm}
                setModalForm={setModalForm}
            />
            <FormSend
                modalFormSend={modalFormSend}
                setModalFormSend={setModalFormSend}
            />
            <button
                className={styleCart || modalForm || modalFormSend ? styles.cart2 : styles.cart}
                onClick={cart}
            >
                <i className="bi bi-cart4"></i>
            </button>
            <ScrollUp 
                scrollUpFunction={scrollUpFunction}
                styleScrollUp={styleScrollUp}
            />
            <Footer
                page="/"
                section1="Section 1"
                section2="Section 2"
                section3="Section 3"
                section4="Section 4"
            />
        </div>
    )
}

