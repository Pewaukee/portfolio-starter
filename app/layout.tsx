import '../styles/globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

// import space mono font
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: '700',
  style: 'italic',
});

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'Karthik Shankar',
  description: "Karthik's personal website",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main className={spaceMono.className}>
          {/** all pages have the navbar, main content, and footer */}
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
