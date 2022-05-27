import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Content'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Boosting Hut | DOTA 2 MMR Boosting Service</title>
        <meta name="description" content="dota 2 logo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <Content />
      </main>

    </div>
  )
}
