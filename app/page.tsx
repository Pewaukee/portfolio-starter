'use client'; // for framer motion
import Image from 'next/image'
import styles from '../styles/page.module.css'
import ThreeComponent from './component'

import Info from './info'
import CCDC from './ccdc'

// import the animation on scroll library
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home: React.FC = () => {

  // initialize the animation on scroll library
  AOS.init(); // can be used with data-aos attribute

  

  return (
    // pass into component prop with custom styles
    <div>
      <Info />
      <CCDC />
    </div>

    // define the accomplishments
  )
}

export default Home;