import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
/* COMPONENTS */
import ProductFormView from './ProductFormView'
/* STYLES */
import styles from '../styles/ProductForm.module.css'

const ProductForm = ({ products, productToggleSelect }) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h6a8jse', 'template_a3q76ph', form.current, 'JzMjMHeAhJEb6uKG5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const productSelect = products
        .filter(product => product.select === true)
        .map(product => ' ' + product.name)
    
    /* .reduce((acum, product) => acum += ' - ' + product.name, '') */

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className={styles.productForm} autoComplete="off">
                <h3>Formulario de pedidos</h3>
                <div className={styles.form}>
                    <div className={styles.name}>
                        <input type="text" name="user_name" maxLength="25" required/>
                        <label>Nombre</label>
                    </div>
                    <div className={styles.phone}>
                        <input type="tel" name="phone" maxLength="15" required/>
                        <label>Teléfono</label>
                    </div>
                    <div className={styles.email}>
                        <input type="email" name="user_email" required/>
                        <label>Email</label>
                    </div>
                    <div className={styles.message}>
                        <textarea name="message" />
                        <label>Mensaje</label>
                    </div>
                    <div className={styles.products}>
                        <label>Productos de interés:</label>
                        <textarea name='products'
                            className={styles.input}
                            value={productSelect} />
                        {
                            products.map((product) => <ProductFormView product={product} key={product.id} productToggleSelect={productToggleSelect} />)
                        }
                    </div>
                </div>
                <button type="submit" value="Send" className={styles.send} >Enviar</button>
            </form>
        </>
    )
}
export default ProductForm;