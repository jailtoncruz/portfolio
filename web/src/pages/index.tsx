import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Showcase from '@/components/Showcase'
import Head from 'next/head'

import { Poppins } from '@next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})


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
      <main id="content" className={poppins.className}>
        <About />
        <Contact />
        <Showcase />
        <Blog />
      </main>
    </>
  )
}
