import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="About Me" />
        <p className="description">
          Personal website <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
