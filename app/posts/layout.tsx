import '../../styles/globals.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      
      <head>
        <title>Blog - Karthik Shankar</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-blog-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-blog-16x16.png" />
      </head>

      <body>
        {/** all pages have the navbar, main content, and footer */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
