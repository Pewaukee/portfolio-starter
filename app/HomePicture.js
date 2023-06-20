// refactor of Home page of the picture, container, and corner logo images
'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import ThreeComponent from "./component";
import styles from '../styles/page.module.css';
import TypingEffect from "./TextAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * 
 * @param {containerStyle} style for the container of the image
 * @param {mainImage} mainImage style and other components for the main image
 * @param {icons} array of icons to be placed in the corners of the image   
 * @param {descriptionText} description of picture, with title and text
 * @returns ThreeComponent with the picture, vertical line, and text 
 */
export default function HomePicture( {containerStyle, mainImage, icons, descriptionText} ) {
    // initialize AOS with useEffect to prevent ReferenceError: document is not defined
    useEffect(() => {
        AOS.init()
    }, []);
    
    // random list to place the corner images
    // [top left, top right, bottom left, bottom right]
    const coordinateList = [0, 0, 0, 0];

    const picture = 
    <div className={styles.imageContainer} 
        style={containerStyle}
        data-aos="fade-up" 
        data-aos-duration="1000">
        {icons.map((icon) => {
            // get the random coordinates first
            let index = 4; // one index larger than list
            while (coordinateList[index] === 1) {
                index = Math.floor(Math.random() * 4);
            }
            coordinateList[index] = 1;

            // place the image in the given coordinates for styles
            let coordinateStyles = {};
            switch (index) {
                case 0:
                    coordinateStyles = {
                        position: 'absolute',
                        top: '-50px',
                        left: '-50px',
                    }
                    break;
                case 1:
                    coordinateStyles = {
                        position: 'absolute',
                        top: '-50px',
                        left: '300px',
                    }
                    break;
                case 2:
                    coordinateStyles = {
                        position: 'absolute',
                        top: '350px',
                        left: '-50px',
                    }
                    break;
                case 3:
                    coordinateStyles = {
                        position: 'absolute',
                        top: '350px',
                        left: '300px',
                    }
                    break;
                default:
                    break;
            }
            return (
                <Image 
                    key={icon.alt} // key needed for mapping to differentiate between images
                    style={coordinateStyles}
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
    const verticalLine = <div data-aos="fade-up" data-aos-duration="1000"></div> // empty, no information needed for the vertical line container
    
    // create description text with typing effect
    const description = 
    <div data-aos="fade-up" data-aos-duration="1000">
        <h1>{descriptionText.title}</h1>
        <br/>
        <TypingEffect text={descriptionText.text} speed={0.02}/>
    </div>

    return (
        <ThreeComponent left={picture} center={verticalLine} right={description} styles={styles}/>
    )
}