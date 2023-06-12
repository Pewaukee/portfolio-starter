import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <Head>
        <title>Karthik Shankar</title>
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
