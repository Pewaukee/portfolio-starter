// create the footer component
import styles from "../../styles/footer.module.css";
import ThreeComponent from "./ThreeComponent";
import Logo from "./Logo";

const Footer: React.FC = () => {

    // create the source components
    const nextjs = <div className={styles.invert}><Logo url="https://nextjs.org/" src="/svg/socials/next.svg" alt="NextJS Logo" width={50} height={50} /></div>
    const vercel = <div className={styles.invert}><Logo url="https://vercel.com/" src="/svg//socials/vercel.svg" alt="Vercel Logo" width={50} height={50} /></div>
    const framer = <Logo url="https://www.framer.com/motion/" src="/images/framer.png" alt="Framer Motion Logo" width={30} height={30} />

    // initialize the social media dimensions
    const width = 30;
    const height = 30;

    // initialize the social media logos
    const github = <div className="invert"><Logo url="https://github.com/pewaukee" src="/svg/socials/github.svg" alt="Github Logo" width={width} height={height} /></div>
    const linkedin = <Logo url="https://www.linkedin.com/in/karthik-shankar-6943b122a/" src="/svg/socials/linkedin.svg" alt="LinkedIn Logo" width={width} height={height} />
    const twitter = <Logo url="https://twitter.com/pewaukee710" src="/svg/socials/twitter.svg" alt="Twitter Logo" width={width} height={height} />
    const youtube = <Logo url="https://www.youtube.com/channel/UCQ6ZI2qKlZqO5yf2wvzX2jQ" src="/svg/socials/youtube.svg" alt="Youtube Logo" width={width} height={height} />

    // initiailze the footer components
    const left = <div className={styles.list}><span>Made with</span>{nextjs}<span>,</span> {vercel}<span>, and</span> {framer}.</div>
    const center = <a href="mailto:karthik.shankar710@gmail.com">karthik.shankar710@gmail.com</a>
    const right = <div className={styles.list}>{github} {linkedin} {twitter} {youtube}</div>

    return (
        <ThreeComponent left={left} center={center} right={right} styles={styles} />
    )
}

export default Footer;