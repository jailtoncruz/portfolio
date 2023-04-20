import Head from 'next/head'
import Header from '@/components/Header'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Showcase from '@/components/Showcase'
import Blog from '@/components/Blog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jailton Cruz - Portfólio</title>
        <meta name="description" content="Portfólio de Jailton Cruz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="content">
        <About />
        <Contact />
        <Showcase />
        <Blog />
      </main>
    </>
  )
}
