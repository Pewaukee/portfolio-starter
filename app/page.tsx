'use client'; // for framer motion
import Image from 'next/image'
import styles from '../styles/page.module.css'
import ThreeComponent from './component'
import TypingEffect from './TextAnimation'

// import the animation on scroll library
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home: React.FC = () => {

  // initialize the animation on scroll library
  AOS.init(); // can be used with data-aos attribute

  // define components for the three component layout
  // profile picture
  const left = 
  <div className={styles.profilePicture} data-aos="fade-up">
    <Image src="/images/avatar.jpeg" alt='profile picture' width={350} height={350}/>
  </div>

  // vertical line
  const center = <div data-aos="fade-up"></div> // empty, no information needed for the vertical line container

  // about me {whoami}
  const aboutMe = `
      My name is Karthik Shankar. \n
      I am currently a student at the \n
      University of Massachusetts Amherst \n
      studying Computer Science. In my free time, \n
      I like to read, listen to music, and improve \n
      my coding skills, like you're seeing here in \n
      this website. In CS, I am particularly interested \n
      in software engineering, cybersecurity, and machine \n
      learning. Thank you for checking out my work!
      `
  const right = 
  <div className={styles.rightContainer} data-aos="fade-up">
    <h1>$ whoami</h1>
    <br/> 
    {/** add in the about me with a fast typing animation */}
    <TypingEffect text={aboutMe} speed={0.02}/> 
  </div>

  // define the acomplishments section variables

  return (
    // pass into component prop with custom styles
    <div>
      <ThreeComponent left={left} center={center} right={right} styles={styles}/>
    </div>

    // define the accomplishments
  )
}

export default Home;