import React, { useEffect } from "react";
import Image from "next/image";
import ThreeComponent from "./component";
import styles from '../styles/page.module.css';
import TypingEffect from "./TextAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Snowboarding() {
    // initialize AOS with useEffect to prevent ReferenceError: document is not defined
    useEffect(() => {
        AOS.init()
    }, []);

    // define the acomplishments section variables
    const snowboardingText = 
    `
    One of my favorite hobbies is snowboarding. I have been snowboarding for \n
    over 10 years now, and I have been to many mountains in the Western US. \n
    I've been to California, Nevada, Utah, Colorado, Wyoming, and Montana resorts \n
    for some powder. My personal favorite is Big Sky, Montana.
    `
    // define custom styles for the image
    const containerStyle = {
        // container style specifically for this info class
        width: "425px",
        height: "525px",
        borderRadius: "25px",
    }
    const imageStyle = {
        // image style specifically for this info class
        border: '3px solid grey',
        borderRadius: '25px',
    }
    // styles for corner image svg's
    const cornerImage1 = {
        position: 'absolute',
        top: '-100px',
        left: '-100px',
    }
    const cornerImage2 = {
        position: 'absolute',
        top: '370px',
        left: '300px',
    }
    // create the snowboarding image with svg images in the corners
    const snowboardingPictures = 
    <div className={styles.imageContainer} 
        style={containerStyle}
        data-aos="fade-up" 
        data-aos-duration="1000">
        <Image 
            style={cornerImage1} 
            src={"/svg/snowboard.svg"}
            alt={"snowboard svg"}
            width={200}
            height={200}
        />
        <Image 
            style={cornerImage2} 
            src={"/svg/snow.svg"}
            alt={"hacker"}
            width={200}
            height={200}
        />
        <Image 
            style={imageStyle} /*using style instead of className*/
            src={"/images/snowboarding.jpeg"} 
            alt={"ccdc"} 
            width={381} 
            height={470}
        />
    </div>

    // vertical line
    const verticalLine = <div data-aos="fade-up" data-aos-duration="1000"></div> // empty, no information needed for the vertical line container

    const snowboardingDescription = 
    <div data-aos="fade-up" data-aos-duration="1000">
        <h1>Snowboarding</h1>
        <br/>
        <TypingEffect text={snowboardingText} speed={0.02}/>
    </div>

    return (
        <ThreeComponent left={snowboardingPictures} center={verticalLine} right={snowboardingDescription} styles={styles}/>
    )
}