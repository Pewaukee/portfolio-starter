// create the navbar component
'use client'; // for framer motion
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import { Space_Mono } from 'next/font/google';
import TypingEffect from "./TextAnimation.js";
import { motion } from "framer-motion";

const space_font = Space_Mono({subsets: ['latin'], style: 'italic', weight: '700'})

const Navbar: React.FC = () => {
    return (
        <div className={styles.main}>

            {/** add in the cursive name */}
            <div className={styles.logo}>
                <div className={styles.logoContainer}>
                    {/* add in some text style here like typing out of a terminal */}
                    <div className={space_font.className}>
                        <TypingEffect text={"> Karthik Shankar"} />   
                    </div>
                </div>
            </div>

            {/** add in the center logo */}
            <div className={styles.name}>
                <Link href="/">
                    <div className={styles.nameContainer}>KS</div>
                </Link>
            </div>

            {/** add in the links */}
            <div className={styles.links}>
                <div className={styles.linkContainer}>
                    <ul>
                        <Link href="/">Home</Link>
                        <Link href="/posts">Posts</Link>
                        <Link href="/deep-plea">The Deep Plea</Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;