import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
/* STYLES */
import styles from '../styles/Form.module.css'

const Forms = ({ modalFormSend, setModalFormSend }) => {

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

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const modal = () => {
        if (name === undefined || name === '' || email === undefined || email === '' || phone === undefined || phone === '') {
            setModalFormSend(modalFormSend)
        } else {
            setModalFormSend(!modalFormSend)
        }
    }
    
    return (
        <>
            <form ref={form} onSubmit={sendEmail} className={styles.form} autoComplete="off">
                <div className={styles.name}>
                    <label>Nombre</label>
                    <input type="text" name="user_name"
                        value={name}
                        onChange={e => setName(e.target.value)} required />
                </div>
                <div className={styles.email}>
                    <label>Email</label>
                    <input type="email" name="user_email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className={styles.phone}>
                    <label>Teléfono</label>
                    <input type="tel" name="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)} required />
                </div>
                <div className={styles.affair}>
                    <label>Asunto</label>
                    <input type="text" name="affair" />
                </div>
                <div className={styles.message}>
                    <label>Mensaje</label>
                    <textarea name="message" />
                </div>
                <button type="submit" value="Send"
                    className={styles.send}
                    onClick={modal}>
                    Enviar
                </button>
            </form>
        </>
    )
}
export default Forms;