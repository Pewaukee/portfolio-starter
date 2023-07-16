import '../../styles/globals.css';

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'Portfolio - Karthik Shankar',
  description: "Karthik's personal portfolio, with projects and more!",
};

export default function Layout({ children }: Props) {
  return <main>{children}</main>;
}
