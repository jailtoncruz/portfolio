import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
    * {
      font-family: ${poppins.style.fontFamily};
    }
  `}</style>
    <Analytics />
    <Component {...pageProps} />
  </>
}
