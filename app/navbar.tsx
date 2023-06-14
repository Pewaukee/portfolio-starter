// create the navbar component
'use client'; // for framer motion
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import TypingEffect from "./TextAnimation.js";
import Logo from "./Logo";

const Navbar: React.FC = () => {
    return (
        <div className={styles.main}>

            {/** add in the name with animation */}
            <div className={styles.logoContainer}>
                {/* add in some text style here like typing out of a terminal */}
                <div className={styles.logoFont}>
                    <TypingEffect text={"> Karthik Shankar"} />   
                </div>
            </div>            

            {/** add in the center logo */}
            <div className={styles.name}>
                <Link href="/">
                    <div className={styles.nameContainer}>KS</div>
                </Link>
            </div>

            {/** add in the links */}
            <div className={styles.linkContainer}>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/posts">Posts</Link>
                    <Link href="/deep-plea">The Deep Plea</Link>
                    <Link href="/socials">Socials</Link>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;