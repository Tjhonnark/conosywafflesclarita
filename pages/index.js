/* COMPONENTS */
import Footer from '../components/Footer'
/* STYLES */
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.body}>
            <section className={styles.section1}>
                <h1>Conos y waffles Clarita</h1>
                <article className={styles.article1_s1}>
                    <div className={styles.text1_a1_s1}>
                        <h2>Article 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facere praesentium ipsum numquam quas autem dignissimos quaerat ut. Provident consectetur velit sequi ullam dolore quas consequatur doloribus! Illum, repellat rerum.</p>
                    </div>
                    <figure>
                        <img src="/example.jpg" alt="" />
                    </figure>
                </article>
                <article className={styles.article2_s1}>
                    <div className={styles.text1_a2_s1}>
                        <h2>Article 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facere praesentium ipsum numquam quas autem dignissimos quaerat ut. Provident consectetur velit sequi ullam dolore quas consequatur doloribus! Illum, repellat rerum.</p>
                    </div>
                    <figure>
                        <img src="/example.jpg" alt="" />
                    </figure>
                </article>
            </section>
            <Footer />
        </div>
    )
}
