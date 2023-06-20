import React, { useEffect } from "react";
import Image from "next/image";
import ThreeComponent from "./component";
import styles from '../styles/page.module.css';
import AOS from "aos";
import "aos/dist/aos.css";
import TypingEffect from "./TextAnimation";

export default function CCDC() {
    // initialize AOS with useEffect to prevent ReferenceError: document is not defined
    useEffect(() => {
        AOS.init()
    }, []);

    // define the acomplishments section variables
    const ccdcTxt = 
    `
    I competed in the 2023 Northeast Collegiate Cyber Defense Competition (NECCDC) \n
    with the UMass Amherst Cybersecurity Club. I was a member of the Blue Team, \n
    which was tasked with defending a network from a Red Team of hackers. \n
    In specific, I worked on Linux hardening, wrote various incident responses, \n
    and helped to secure the network. 
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
    // create the ccdc image with svg images in the corners
    const ccdc = 
    <div className={styles.imageContainer} 
        style={containerStyle}
        data-aos="fade-up" 
        data-aos-duration="1000">
        <Image 
            style={cornerImage1} 
            src={"/svg/defense.svg"}
            alt={"defense"}
            width={200}
            height={200}
        />
        <Image 
            style={cornerImage2} 
            src={"/svg/hacker.svg"}
            alt={"hacker"}
            width={200}
            height={200}
        />
        <Image 
            style={imageStyle} /*using style instead of className*/
            src={"/images/ccdc.png"} 
            alt={"ccdc"} 
            width={381} 
            height={470}
        />
    </div>

    // vertical line
    const verticalLine = <div data-aos="fade-up" data-aos-duration="1000"></div> // empty, no information needed for the vertical line container

    const ccdcDesc = 
    <div data-aos="fade-up" data-aos-duration="1000">
        <h1>NECCDC</h1>
        <br/>
        <TypingEffect text={ccdcTxt} speed={0.02}/>
    </div>

    return (
        <ThreeComponent left={ccdc} center={verticalLine} right={ccdcDesc} styles={styles}/>
    )
}
