import Image from "next/image";
import ThreeComponent from "./component";
import styles from '../styles/CCDC.module.css';
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
    const ccdc = <div className={styles.image} data-aos="fade-up" data-aos-duration="1000">
        <Image src={"/images/ccdc.png"} alt={"ccdc"} width={381} height={470}/>
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
