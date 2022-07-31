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
            var sound = new Audio('sounds/error.wav')
            sound.play()
        } else {
            setModalFormSend(!modalFormSend)
            var sound = new Audio('sounds/send.wav')
            sound.play()
        }
    }

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className={styles.form} autoComplete="off">
                <div className={styles.titleForm}>
                    <h2>Hable con nosotros</h2>
                </div>
                <div className={styles.name}>
                    <input type="text" name="user_name"
                        value={name}
                        onChange={e => setName(e.target.value)} required />
                    <span className={styles.highlight}></span>
                    <span className={styles.bar}></span>
                    <label>Nombre</label>
                </div>
                <div className={styles.email}>
                    <input type="text" name="user_email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} required />
                    <span className={styles.highlight}></span>
                    <span className={styles.bar}></span>
                    <label>Email</label>
                </div>
                <div className={styles.phone}>
                    <input type="tel" name="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)} required />
                    <span className={styles.highlight}></span>
                    <span className={styles.bar}></span>
                    <label>Teléfono</label>
                </div>
                <div className={styles.affair}>
                    <input type="text" name="affair" required />
                    <span className={styles.highlight}></span>
                    <span className={styles.bar}></span>
                    <label>Asunto</label>
                </div>
                <div className={styles.message} >
                    <textarea type="text" name="message" required />
                    <span className={styles.highlight}></span>
                    <span className={styles.bar}></span>
                    <label>Mensaje</label>
                </div>
                <div className={styles.buttonDiv}>
                    <button type="submit" value="Send"
                        className={styles.send}
                        onClick={modal}>
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}
export default Forms;