// refactor of Home page of the Element, container, and corner logo images
import Image from "next/image";
import ThreeComponent from "./ThreeComponent";
import styles from '../../styles/page.module.css';
import VerticalLine from "./VerticalLine";
import Icon from "./Icon";
import Description from "./Description";
import FadeUp from "./FadeUp";

type HomeElementProps = {
    containerStyle: string;
    mainImage: {
        style: string
        src: string,
        alt: string,
        width: number,
        height: number,
    },
    icons: {
        src: string;
        alt: string;
        width: number;
        height: number;
    }[],
    descriptionText: {
        title: string[];
        text: string;
    },
    coordinateStyles: string[]; // of length 4 also fix or (using tailwind)
};

const HomeElement: React.FC<HomeElementProps> = ({
    containerStyle,
    mainImage,
    icons,
    descriptionText,
    coordinateStyles,
    }) => {

    // create picture and icon wrapped in fade-up component
    const picture = 
    <FadeUp className={containerStyle}>
        <>
            <Icon icons={icons} coordinateStyles={coordinateStyles}/>
            <Image 
                className={mainImage.style} /*using style instead of className*/
                src={mainImage.src} 
                alt={mainImage.alt} 
                width={mainImage.width} 
                height={mainImage.height}
            />
        </>
    </FadeUp>
    
    // create description text with typing effect
    const description = 
    <FadeUp>
        <Description descriptionText={descriptionText}/>
    </FadeUp>

    return (
        <ThreeComponent left={picture} center={<VerticalLine height={100}/>} right={description} styles={styles}/>
    );   
}

export default HomeElement;