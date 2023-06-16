'use client'; // for framer motion
import Image from 'next/image'
import styles from '../styles/page.module.css'
import ThreeComponent from './component'
import TypingEffect from './TextAnimation'

const Home: React.FC = () => {

  // define components for the three component layout
  // profile picture
  const left = 
  <div className={styles.profilePicture}>
    <Image src="/images/avatar.jpeg" alt='profile picture' width={350} height={350}/>
  </div>

  // vertical line
  const center = <div></div> // empty, no information needed

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
  <div className={styles.rightContainer}>
    <h1>$ whoami</h1>
    <br/> 
    {/** add in the about me with a fast typing animation */}
    <TypingEffect text={aboutMe} speed={0.02}/> 
  </div>

  return (
    // pass into component prop with custom styles
    <ThreeComponent left={left} center={center} right={right} styles={styles}/>

    // define the accomplishments
  )
}

export default Home;