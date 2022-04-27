import Head from 'next/head'
import styles from '../styles/faq.module.css'

export default function Faq() {

  return (
    <div className="container">
      <Head>
        <title>Inhetherit</title>
        <meta name="description" content="Find peace of mind. Bequeath your cryptos!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          FAQs
        </h1>
      </main>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Maître Yoda
        </a>
      </footer>
    </div>
  )
}