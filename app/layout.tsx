import '../styles/globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

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
        {/** all pages have the navbar, main content, and footer */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
