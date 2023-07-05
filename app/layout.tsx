import '../styles/globals.css'
import Head from 'next/head'
import Navbar from './components/navbar'
import Footer from './components/footer'

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
        {/** all pages have the navbar, main content, and footer */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
