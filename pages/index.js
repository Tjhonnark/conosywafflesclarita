import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.body}>
            <section className={styles.section1}>
                <h1>Conos y waffles Clarita</h1>
                <article className={styles.article1_s1}>
                    <div className={styles.container1_s1}>
                        <div className={styles.text1_a1_s1}>
                            <h2>Article 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facere praesentium ipsum numquam quas autem dignissimos quaerat ut. Provident consectetur velit sequi ullam dolore quas consequatur doloribus! Illum, repellat rerum.</p>
                        </div>
                        <figure className={styles.picture1_a1_s1}>
                            <img src="/example.jpg" alt="" />
                        </figure>
                    </div>
                </article>
            </section>
        </div>
  )
}
