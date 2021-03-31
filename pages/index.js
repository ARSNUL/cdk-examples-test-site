import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <title>CDK Examples Test Site</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
          <h1>Hello</h1>

          <label htmlFor="contact_form">Contact Me (include your email)</label>
      </main>
    </div>
  )
}
