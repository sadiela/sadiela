import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Portfolio() {
    return (
      <div className="container">
        <Head>
          <title>Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <Header title="Undergraduate Projects" />
          <p className="description">
            Personal website <code>pages/index.js</code>
          </p>
          <Header title="Personal Projects" />
          <p className="description">
            Personal website <code>pages/index.js</code>
          </p>
          <Header title="Sadie Allen" />
          <p className="description">
            Personal website <code>pages/index.js</code>
          </p>
        </main>
  
        <Footer />
      </div>
    )
  }