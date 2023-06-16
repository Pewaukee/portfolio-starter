// create the navbar component
'use client'; // for framer motion
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import TypingEffect from "./TextAnimation.js";
import CustomComponent from "./component";

const Navbar: React.FC = () => {

    {/** add in the name with animation */}
    const left = <TypingEffect text={"> Karthik Shankar"} speed={0.08}/>   

    {/** add in the center logo */}
    const center = <Link href="/">KS</Link>
    
    {/** add in the links */}
    const right = <ul>
                    <Link href="/">Home</Link>
                    <Link href="/posts">Posts</Link>
                    <Link href="/deep-plea">The Deep Plea</Link>
                    <Link href="/socials">Socials</Link>
                  </ul>

    {/* pass into component prop with custom styles */}
    return (
        <CustomComponent left={left} center={center} right={right} styles={styles} />
    )
}

export default Navbar;