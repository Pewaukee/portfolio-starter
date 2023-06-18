import Image from "next/image";
import ThreeComponent from "./component";
import styles from '../styles/page.module.css';
import Aos from "aos";
import "aos/dist/aos.css";

export default function CCDC() {
    // initialize AOS
    Aos.init();
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
    const ccdc = 
    <div className={styles.imageContainer} 
        style={containerStyle}
        data-aos="fade-up" 
        data-aos-duration="1000">
        <Image /*using style instead of className*/
            style={imageStyle} 
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
        <p>{ccdcTxt}</p>
    </div>

    return (
        <ThreeComponent left={ccdc} center={verticalLine} right={ccdcDesc} styles={styles}/>
    )
}
