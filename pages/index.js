import Link from 'next/link'
/* COMPONENTS */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
/* STYLES */
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.body}>
            <Navbar />
            <section className={styles.section1}>
                <div className={styles.text1_a1_s1}>
                    <h1>Conos y Waffles Clarita</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href='/products'>
                        <a>Ordenar pedido</a>
                    </Link>
                </div>
                <figure>
                    <img src="/icecream.jpg" alt="" />
                </figure>
            </section>
            <section className={styles.section2}>
                <h1>Nuevos productos</h1>
                <article className={styles.article1_s2}>
                    <div className={styles.text1_a1_s2}>
                        <h2>Article 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                        <Link href='/products'>
                            <a>Ordenar pedido</a>
                        </Link>
                    </div>
                    <figure>
                        <img src="/example.jpg" alt="" />
                    </figure>
                </article>
                <article className={styles.article2_s2}>
                    <div className={styles.text1_a2_s2}>
                        <h2>Article 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                        <Link href='/products'>
                            <a>Ordenar pedido</a>
                        </Link>
                    </div>
                    <figure>
                        <img src="/example.jpg" alt="" />
                    </figure>
                </article>
            </section>
            <section className={styles.section3}>
                <div className={styles.text1_a1_s3}>
                    <h1>Article 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                </div>
                <div className={styles.text1_a2_s3}>
                    <h1>Article 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
                </div>
                <figure>
                    <img src="/cityExample.jpg" alt="" />
                </figure>
            </section>
            <section className={styles.section4}>
                <div className={styles.s4_item1}>
                    <i class="bi bi-cart4"></i>
                    <h3>Producto Nacional</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci dolor officiis natus ipsum saepe aliquam, illum, temporibus laboriosam expedita nulla eius, quas earum et quidem.</p>
                </div>
                <div className={styles.s4_item2}>
                    <i class="bi bi-person-video3"></i>
                    <h3>Soporte</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci dolor officiis natus ipsum saepe aliquam, illum, temporibus laboriosam expedita nulla eius, quas earum et quidem.</p>
                </div>
                <div className={styles.s4_item3}>
                    <i class="bi bi-shop"></i>
                    <h3>Producto de calidad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci dolor officiis natus ipsum saepe aliquam, illum, temporibus laboriosam expedita nulla eius, quas earum et quidem.</p>
                </div>
            </section>
            <Footer />
        </div>
    )
}
