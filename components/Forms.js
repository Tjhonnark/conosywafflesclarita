import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
/* STYLES */
import styles from '../styles/Form.module.css'

export default function Forms(props) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h6a8jse', 'template_3jv6aqt', form.current, 'JzMjMHeAhJEb6uKG5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <h3>{props.title}</h3>
                <div className={styles.name}>
                    <label>Nombre</label>
                    <input type="text" name="user_name" />
                </div>
                <div className={styles.email}>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div className={styles.phone}>
                    <label>Teléfono</label>
                    <input type="tel" name="phone" />
                </div>
                <div className={styles.affair}>
                    <label>Asunto</label>
                    <input type="text" name="affair" />
                </div>
                <div className={styles.message}>
                    <label>Mensaje</label>
                    <textarea name="message" />
                </div>
                <button type="submit" value="Send" className={styles.send} >Enviar</button>
            </form>
        </>
    )
}