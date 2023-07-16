import Head from 'next/head'
import '../../styles/globals.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Image from 'next/image'
import DateFormatter from '../../components/DateFormatter'

type Props = {
  children: React.ReactNode
}

export const metadata = {
  title: 'Blog - Karthik Shankar',
  description: "Karthik's personal blog",
}

export default function Layout({ children }: Props) {
  return (
    <main>
        <div>
            {/* <head>
            <title>Blog - Karthik Shankar</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-blog-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-blog-16x16.png" />
            </head> causes hydration error */} 
            {children}
        </div>
    </main>
      
  )
}
