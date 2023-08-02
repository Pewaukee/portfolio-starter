// create the navbar component
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';
import TypingEffect from './TextAnimation';
import ThreeComponent from './ThreeComponent';
import { textShadow } from '../../data/TextShadow';

const Navbar: React.FC = () => {
  {
    /** add in the name with animation */
  }
  const left = <TypingEffect text={'> Karthik Shankar'} speed={0.08} />;

  {
    /** add in the center logo */
  }
  const center = <div>KS</div>;

  {
    /** add in the links */
  }
  // TODO: dropdown menu for mobile? also convert to tailwind
  const right = (
    <ul>
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/posts">Posts</Link>
    </ul>
  );

  {
    /* pass into component prop with custom styles */
  }
  return (
    <ThreeComponent
      left={left}
      center={<Link href="/">{center}</Link>}
      right={right}
      styles={styles}
    />
  );
};

export default Navbar;
