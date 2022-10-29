import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
/* COMPONENTS */
import ProductFormView from './ProductFormView'
/* STYLES */
import styles from '../styles/ProductForm.module.css'

const ProductForm = ({ products, productToggleSelect, modalForm, setModalForm, modalFormSend, setModalFormSend }) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h6a8jse', 'template_968kuzh', form.current, 'JzMjMHeAhJEb6uKG5')
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

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const modal = () => {
        if (name === undefined || name === '' || email === undefined || email === '' || phone === undefined || phone === '') {
            setModalFormSend(modalFormSend)
            setModalForm(modalForm)
            var sound = new Audio('sounds/error.wav')
            sound.play()
            sound.volume = 0.5;
        } else {
            setModalFormSend(!modalFormSend)
            setModalForm(!modalForm)
            var sound = new Audio('sounds/send.wav')
            sound.play()
            sound.volume = 0.5;
        }
    }

    const modalClose = () => {
        setModalForm(!modalForm)
        /* var sound = new Audio('sounds/close.wav')
        sound.play()
        sound.volume = 0.2; */
    }
    
    return (
        <>
            <form id="formulario" ref={form} onSubmit={sendEmail} className={modalForm ? styles.productForm : styles.productForm2} autoComplete="off">
                <div className={styles.container}>
                    <div className={styles.title_container}>
                        <h2>Productos de interés</h2>
                        <button onClick={modalClose}
                        ><i className="bi bi-x-circle-fill"></i></button>
                    </div>
                    <div className={styles.products}>
                        {
                            products.map((product) => <ProductFormView product={product} key={product.id} productToggleSelect={productToggleSelect} />)
                        }
                    </div>
                    <div className={styles.form}>
                        <div className={styles.name}>
                            <label>Nombre</label>
                            <input type="text" name="user_name" value={name}
                                onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className={styles.phone}>
                            <label>Teléfono</label>
                            <input type="tel" name="phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required />
                        </div>
                        <div className={styles.email}>
                            <label>Email</label>
                            <input type="email" name="user_email" value={email}
                                onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className={styles.message}>
                            <label>Mensaje</label>
                            <textarea name="message" />
                        </div>
                        <div className={styles.productsEmail}>
                            <textarea name='products'
                                className={styles.input}
                                value={productSelect}
                                /* readOnly *//>
                        </div>
                        <button type="submit" value="Send" 
                        className={styles.send}
                        onClick={modal}
                        >
                            Enviar
                        </button>
                        <button
                        className={styles.cancel} 
                        onClick={modalClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default ProductForm;