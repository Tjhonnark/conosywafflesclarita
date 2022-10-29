import Link from 'next/link'
import Image from 'next/image';
/* COMPONENTS */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'
/* DATA */
import { clients } from '../components/data/dataClients';
/* STYLES */
import styles from '../styles/About.module.css'

export default function About({ scrollUpFunction, styleScrollUp }) {

    return (
        <div className={styles.body}>
            <Navbar />
            <section id='section1' className={styles.section1}>
                <article className={styles.article1_s1}>
                    <div className={styles.text1_a1_s1}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                    </div>
                    <Image
                        className={styles.imageA1S1}
                        src="/example.jpg"
                        alt=""
                        width={600}
                        height={400}
                        objectFit="cover"
                    />
                </article>
                <article className={styles.article2_s1}>
                    <div className={styles.text1_a2_s1}>
                        <h2>¿Quiénes somos?</h2>
                    </div>
                    <Image
                        className={styles.imageA2S1}
                        src="/example.jpg"
                        alt=""
                        width={600}
                        height={400}
                        objectFit="cover"
                    />
                </article>
            </section>
            <section id='section2' className={styles.section2}>
                <div className={styles.text1_a1_s2}>
                    <h1>Misión</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et numquam laboriosam omnis autem perspiciatis laborum sed voluptatum optio! Vel, quo totam. Iure, totam. Rerum magnam consectetur minima excepturi esse.</p>
                </div>
                <div className={styles.text1_a2_s2}>
                    <h1>Visión</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et numquam laboriosam omnis autem perspiciatis laborum sed voluptatum optio! Vel, quo totam. Iure, totam. Rerum magnam consectetur minima excepturi esse.</p>
                </div>
                <Image
                        className={styles.backgroundS2}
                        src="/icecream.jpg"
                        alt=""
                        width={1350}
                        height={400}
                        objectFit="cover"
                    />
            </section>
            <section id='section3' className={styles.section4}>
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
            <section id='section4' className={styles.section5}>
                <div className={styles.s5_text}>
                    <h2>Nuestros clientes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className={styles.s5_container}>
                    {
                        clients.map((client) => {
                            return (
                                <Image key={client.id}
                                    className={styles.client}
                                    src={client.image}
                                    alt=''
                                    width={150}
                                    height={150}
                                    objectFit="cover"
                                />
                            )
                        })
                    }
                </div>
            </section>
            <ScrollUp 
                scrollUpFunction={scrollUpFunction}
                styleScrollUp={styleScrollUp}
            />
            <Footer 
                page="/about"
                section1="Section 1"
                section2="Section 2"
                section3="Section 3"
                section4="Section 4"
            />
        </div>
    )
} 