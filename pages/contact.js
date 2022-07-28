import { useState } from 'react';
/* COMPONENTS */
import Forms from '../components/Forms.js';
import MapView from '../components/mapLeaflet/MapView'
import FormSend from '../components/modals/FormSend.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Info from '../components/Info';
import ScrollUp from '../components/ScrollUp'
/* STYLES */
import styles from '../styles/Contact.module.css'

const Contact = ({ scrollUpFunction, styleScrollUp }) => {

    const [modalFormSend, setModalFormSend] = useState(false);

    return (
        <div className={styles.body}>
            <Navbar />
            <section className={styles.section1}>
                <figure>
                    <img src="/ContactUs.jpg" alt="" />
                </figure>
                <div className={styles.text_s1}>
                    <h1>Contáctenos</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id quia quibusdam, assumenda atque fugit.
                    </p>
                    <button>Get Started</button>
                </div>
            </section>
            <section className={styles.section2}>
                <div className={styles.map}>
                    <MapView />
                </div>
                <div className={styles.info}>
                    <Info />
                </div>
            </section>
            <section className={styles.section3}>
                <div className={styles.contact_form}>
                    <Forms modalFormSend={modalFormSend} setModalFormSend={setModalFormSend} />
                </div>
            </section>
            <FormSend modalFormSend={modalFormSend} setModalFormSend={setModalFormSend} />
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
export default Contact;