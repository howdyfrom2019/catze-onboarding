import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";
import { DM_Sans } from '@next/font/google';

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-dm-sans: ${dmSans.style.fontFamily};
          }
          
          body {
            font-family: ${dmSans.style.fontFamily};
          }
        `}
      </style>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
