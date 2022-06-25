import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <section className={styles.section1}>
        <h1 className={styles.title_s1}>Section 1</h1>
        <article className={styles.article1_s1}>
          <div className={styles.container1_s1}>
            <div className={styles.text_a1_s1}>
            <h2 className={styles.title_a1_s1}>article 1</h2>
            <p className={styles.description1_a1_s1}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
            </div>
            <figure className={styles.picture1_a1_s1}>
              <img className={styles.img1_a1_s1} src="/example.jpg" alt="" />
            </figure>
          </div>
        </article>
      </section>

    </div>
  )
}
