// file to return the ThreeComponent of the intro part of the home page
import Image from "next/image";
import ThreeComponent from "./component";
import styles from '../styles/Info.module.css';
import TypingEffect from "./TextAnimation";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Info() {
    // initialize AOS
    AOS.init();

    // define components for the three component layout
    // profile picture
    const profilePic = 
    <div className={styles.profilePicture} data-aos="fade-up" data-aos-duration="1000">
        <Image src="/images/avatar.jpeg" alt='profile picture' width={350} height={350}/>
    </div>

    // vertical line
    const verticalLine = <div data-aos="fade-up" data-aos-duration="1000"></div> // empty, no information needed for the vertical line container

    // about me {whoami}
    const aboutMe = 
    `
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
    const aboutMeElement = 
    <div data-aos="fade-up" data-aos-duration="1000">
        <h1>$ whoami</h1>
        <br/> 
        {/** add in the about me with a fast typing animation */}
        <TypingEffect text={aboutMe} speed={0.02}/> 
    </div>

    return (
        <ThreeComponent left={profilePic} center={verticalLine} right={aboutMeElement} styles={styles}/>
    )
}