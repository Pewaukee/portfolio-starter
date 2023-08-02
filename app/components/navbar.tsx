// create the navbar component
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';
import TypingEffect from './TextAnimation';
import HamburgerMenu from './HamburgerMenu';

const Navbar: React.FC = () => {
  {
    /* pass into component prop with custom styles */
  }
  return (
    <div className="flex items-center justify-between relative italic h-[100px] z-40 bg-gradient-to-r from-[#1080cab4] to-[#062f8c90] shadow-lg shadow-white border-b-[3px] border-solid border-black">
      <div className="pl-[5%] items-center flex font-extrabold">
        <TypingEffect text={'> Karthik Shankar'} speed={0.08} />
      </div>
      <Link
        href="/"
        className={`absolute left-[50%] -translate-x-[50%] w-[70px] h-[70px] border-[50%] flex items-center justify-center rounded-full ${styles.centerContainer}`}
      >
        KS
      </Link>
      <div className="flex items-center justify-between pr-[5%] hidden md:flex">
        <ul className={`whitespace-nowrap last:mr-0 ${styles.rightContainer}`}>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/posts">Posts</Link>
        </ul>
      </div>
      <div className='flex md:hidden'>
        <HamburgerMenu />
      </div>
      
      
    </div>
  );
};

export default Navbar;
