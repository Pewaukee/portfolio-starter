// file to return the ThreeComponent of the intro part of the home page
import React, { useEffect } from "react";
import Image from "next/image";
import ThreeComponent from "./component";
import styles from '../styles/page.module.css';
import TypingEffect from "./TextAnimation";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Info() {
    // initialize AOS with useEffect to prevent ReferenceError: document is not defined
    useEffect(() => {
        AOS.init()
    }, []);

    // define components for the three component layout
    // profile picture
    const containerStyle = {
        // container style specifically for this info class
        width: "400px",
        height: "400px",
        borderRadius: "50%",
    }
    const imageStyle = {
        // image style specifically for this info class
        border: '3px solid grey',
        borderRadius: '50%',
    }
    // styles for corner image svg's
    const cornerImage1 = {
        position: 'absolute',
        top: '0px',
        left: '0px',
    }
    const cornerImage2 = {
        position: 'absolute',
        top: '0px',
        left: '275px',
        filter: 'invert(1)',
    }
    const cornerImage3 = {
        position: 'absolute',
        top: '325px',
        left: '150px',
    }
    // create the ccdc image with svg images in the corners
    const profilePic = 
    <div className={styles.imageContainer} 
        style={containerStyle}
        data-aos="fade-up" 
        data-aos-duration="1000">
        <Image 
            style={cornerImage1}
            src={"/svg/code.svg"}
            alt={"defense"}
            width={100}
            height={100}
        />
        <Image 
            style={cornerImage2}
            src={"/svg/music.svg"}
            alt={"defense"}
            width={100}
            height={100}
        />
        <Image 
            style={cornerImage3}
            src={"/svg/book.svg"}
            alt={"defense"}
            width={100}
            height={100}
        />
        <Image /*note this key change*/
            style={imageStyle} 
            src="/images/avatar.jpeg" 
            alt='profile picture' 
            width={350} 
            height={350}
        />
    </div>

    // vertical line
    const verticalLine = <div data-aos="fade-up" data-aos-duration="1000"></div> // empty, no information needed for the vertical line container

    // about me {whoami}
    const aboutMe = 
    `
    Hello! My name is Karthik Shankar. \n
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