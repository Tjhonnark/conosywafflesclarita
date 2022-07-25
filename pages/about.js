import Link from 'next/link'
/* COMPONENTS */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
/* STYLES */
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.body}>
            <Navbar />
            <section className={styles.section1}>
                <article className={styles.article1_s1}>
                    <div className={styles.text1_a1_s1}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                    </div>
                    <figure>
                        <img src="/example.jpg" alt="" />
                    </figure>
                </article>
                <article className={styles.article2_s1}>
                    <div className={styles.text1_a2_s1}>
                        <h2>¿Quiénes somos?</h2>
                    </div>
                    <figure>
                        <img src="/example.jpg" alt="" />
                    </figure>
                </article>
            </section>
            <section className={styles.section2}>
                <div className={styles.text1_a1_s2}>
                    <h1>Misión</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et numquam laboriosam omnis autem perspiciatis laborum sed voluptatum optio! Vel, quo totam. Iure, totam. Rerum magnam consectetur minima excepturi esse.</p>
                </div>
                <div className={styles.text1_a2_s2}>
                    <h1>Visión</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et numquam laboriosam omnis autem perspiciatis laborum sed voluptatum optio! Vel, quo totam. Iure, totam. Rerum magnam consectetur minima excepturi esse.</p>
                </div>
                <figure>
                    <img src="/icecream.jpg" alt="" />
                </figure>
            </section>
            <section className={styles.section4}>
                <div className={styles.s4_title}>
                    <h2>Nuestro equipo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, quidem.</p>
                </div>
                <div className={styles.s4_container}>
                    <div className={styles.s4_item}>
                        <figure>
                            <img src="/carnet.png" alt="" />
                        </figure>
                        <h5>Nombre y apellido</h5>
                        <p>Puesto</p>
                    </div>
                    <div className={styles.s4_item}>
                        <figure>
                            <img src="/carnet.png" alt="" />
                        </figure>
                        <h5>Nombre y apellido</h5>
                        <p>Puesto</p>
                    </div>
                    <div className={styles.s4_item}>
                        <figure>
                            <img src="/carnet.png" alt="" />
                        </figure>
                        <h5>Nombre y apellido</h5>
                        <p>Puesto</p>
                    </div>
                    <div className={styles.s4_item}>
                        <figure>
                            <img src="/carnet.png" alt="" />
                        </figure>
                        <h5>Nombre y apellido</h5>
                        <p>Puesto</p>
                    </div>
                    <div className={styles.s4_item}>
                        <figure>
                            <img src="/carnet.png" alt="" />
                        </figure>
                        <h5>Nombre y apellido</h5>
                        <p>Puesto</p>
                    </div>
                    <div className={styles.s4_item}>
                        <figure>
                            <img src="/carnet.png" alt="" />
                        </figure>
                        <h5>Nombre y apellido</h5>
                        <p>Puesto</p>
                    </div>
                </div>
            </section>
            <section className={styles.section5}>
                <div className={styles.s5_text}>
                    <h2>Nuestros clientes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className={styles.s5_container}>
                    <figure>
                        <img src="/logo.png" alt="" />
                    </figure>
                    <figure>
                        <img src="/logo.png" alt="" />
                    </figure>
                    <figure>
                        <img src="/logo.png" alt="" />
                    </figure>
                </div>
            </section>
            <Footer />
        </div>
    )
} 