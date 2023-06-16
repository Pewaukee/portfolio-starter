// create the footer component
import Link from "next/link";
import styles from "../styles/footer.module.css";
import CustomComponent from "./component.js";
import Logo from "./Logo";

const Footer: React.FC = () => {

    // create the logo components
    //TODO: some of these don't load
    const nextjs = <Logo url="https://nextjs.org/" src="/svg/nextjs.svg" alt="NextJS Logo" width={100} height={100} />
    const vercel = <Logo url="https://vercel.com/" src="/svg/vercel.svg" alt="Vercel Logo" width={100} height={100} />
    const framer = <Logo url="https://www.framer.co m/motion/" src="/images/framer.svg" alt="Framer Motion Logo" width={100} height={100} />

    // initialize the social media logos
    const width = 30;
    const height = 30;
    const github = <Logo url="https://github.com/pewaukee" src="/svg/github.svg" alt="Github Logo" width={width} height={height} />
    const linkedin = <Logo url="https://www.linkedin.com/in/karthik-shankar-6943b122a/" src="/svg/linkedin.svg" alt="LinkedIn Logo" width={width} height={height} />
    const twitter = <Logo url="https://twitter.com/pewaukee710" src="/svg/twitter.svg" alt="Twitter Logo" width={width} height={height} />
    const youtube = <Logo url="https://www.youtube.com/channel/UCQ6ZI2qKlZqO5yf2wvzX2jQ" src="/svg/youtube.svg" alt="Youtube Logo" width={width} height={height} />

    const left = <div className={styles.list}>Made with {nextjs}, {vercel}, and {framer}.</div>
    const center = <p>karthik.shankar710@gmail.com</p>
    const right = <div className={styles.list}>{github} {linkedin} {twitter} {youtube}</div>

    return (
        <CustomComponent left={left} center={center} right={right} styles={styles} />
    )
}

export default Footer;