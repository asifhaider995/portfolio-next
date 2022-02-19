import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio @asifhaider995</title>
        <meta name="description" content="Portfolio site of Asif Haider Khan (@asifhaider995)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.cover}>
          <div className={styles.innerCover}>
            <h1 className={styles.title}>
              Hi there, I'm <a href="https://nextjs.org">Asif Haider Khan</a>
            </h1>
            <br />
            <h2 className={styles.title2}>
              I am a Dhaka, Bangladesh based full stack developer focusing mainly on React, Node, Django and Laravel while dealing with IoT and DevOps. Also a part-time data scientist as I am comfortable with dealing with dataframes and image recognition problems.
            </h2>
          </div>
        </div>
        

        
        <div className={styles.projects}>
          <h2 className={styles.projectTitle}>
            Take a Look at my Works
          </h2>
          <h3 className={styles.projectSubTitle}>
            Professional Projects
          </h3>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Ban Base &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Dokane Dokane Ad &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            
          </div>
          <h3 className={styles.projectSubTitle}>
            Personal Projects
          </h3>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Ban Base &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Dokane Dokane Ad &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </div>
        </div>
        
      </main>

      <footer className={styles.footer}>
        All rights reserved &copy; 2022
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
