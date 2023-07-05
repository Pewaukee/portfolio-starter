// create the navbar component
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import TypingEffect from "./TextAnimation";
import ThreeComponent from "./ThreeComponent";

const Navbar: React.FC = () => {

    {/** add in the name with animation */}
    const left = <TypingEffect text={"> Karthik Shankar"} speed={0.08}/>   

    {/** add in the center logo */}
    const center = <Link href="/">KS</Link>
    
    {/** add in the links */}
    const right = <ul>
                    <Link href="/">Home</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/posts">Posts</Link>
                  </ul>

    {/* pass into component prop with custom styles */}
    return (
        <ThreeComponent left={left} center={center} right={right} styles={styles} />
    )
}

export default Navbar;