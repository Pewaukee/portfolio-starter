// refactor of Home page of the Element, container, and corner logo images
'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import ThreeComponent from "./ThreeComponent";
import styles from '../styles/page.module.css';
import TypingEffect from "./TextAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

type HomeElementProps = {
    containerStyle: React.CSSProperties;
    mainImage: [
        {
            border: string;
            borderRadius: string;
        },
        string, // image source
        string, // alt text
        number, // width
        number, // height
    ];
    icons: {
        src: string;
        alt: string;
        width: number;
        height: number;
    }[];
    descriptionText: {
        title: string[];
        text: string;
    };
    coordinateStyles: {
        position: string;
        top: string;
        left: string;
    }[];
};

const HomeElement: React.FC<HomeElementProps> = ({
    containerStyle,
    mainImage,
    icons,
    descriptionText,
    coordinateStyles,
    }) => {
    // initialize AOS with useEffect to prevent ReferenceError: document is not defined
    useEffect(() => {
        AOS.init()
    }, []);

    // random list to place the corner images
    // [top left, top right, bottom left, bottom right]
    // represent occupied spaces
    const coordinateList = [false, false, false, false];

    const picture = 
    <div className={styles.imageContainer} 
        style={containerStyle}
        data-aos="fade-up" 
        data-aos-duration="500">
        {icons.map((icon) => {
            // get the random coordinates first
            let index = -1;
            do { 
                index = Math.floor(Math.random() * 4);
            }
            while (coordinateList[index] === true);
            coordinateList[index] = true;

            // place the image in the given coordinates for styles
            let coordinateStyle = {};
            switch (index) {
                case 0:
                    coordinateStyle = coordinateStyles[0]
                    break;
                case 1:
                    coordinateStyle = coordinateStyles[1]
                    break;
                case 2:
                    coordinateStyle = coordinateStyles[2]
                    break;
                case 3:
                    coordinateStyle = coordinateStyles[3]
                    break;
                default:
                    break;
            }
            return (
                <Image 
                    key={icon.alt} // key needed for mapping to differentiate between images
                    style={coordinateStyle}
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                />
            )
        })}
        <Image 
            style={mainImage[0]} /*using style instead of className*/
            src={mainImage[1]} 
            alt={mainImage[2]} 
            width={mainImage[3]} 
            height={mainImage[4]}
        />
    </div>

    // vertical line
    const verticalLine = <div data-aos="fade-up" data-aos-duration="500"></div> // empty, no information needed for the vertical line container

    // create description text with typing effect
    const description = 
    <div data-aos="fade-up" data-aos-duration="500">
        {descriptionText.title.map((t) => {
            return (
                <div key={t}>
                    <h1>{t}</h1>
                    <br/>
                </div>
            )
        })}
        <TypingEffect text={descriptionText.text} speed={0.02}/>
    </div>

    return (
        <ThreeComponent left={picture} center={verticalLine} right={description} styles={styles}/>
    );   
}

export default HomeElement;