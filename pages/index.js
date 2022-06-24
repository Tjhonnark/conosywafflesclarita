import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <section className={styles.section1}>
        <h1>Section 1</h1>
        <article className={styles.article1section1}>
          <h2>article 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
          <resources>
            <img src="/example.jpg" alt="" />
          </resources>
        </article>

      </section>

      <section className={styles.section2}>
        <h1>Section 2</h1>
        <div className={styles.container2}>
          <article className={styles.article1section2}>
            <h2>article 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
            <resources>
              <img src="/example.jpg" alt="" />
            </resources>
          </article>
          <article className={styles.article2section2}>
            <h2>article 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat explicabo nobis deleniti sapiente quis assumenda, aspernatur natus nemo nihil eaque totam rem a cum inventore magni vero. Vel, laudantium!</p>
            <resources>
              <img src="/example.jpg" alt="" />
            </resources>
          </article>
        </div>
      </section>
    </div>
  )
}
