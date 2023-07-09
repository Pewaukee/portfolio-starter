import Image from "next/image";

interface Icon {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface IconProps {
    icons: Icon[];
    coordinateStyles: string[]; // of length 4 for tailwind corner styles
};

const Icon: React.FC<IconProps> = ({icons, coordinateStyles}) => {
    // random list to place the corner images
    // [top left, top right, bottom left, bottom right]
    // represent occupied spaces
    const coordinateList = [false, false, false, false];

    return ( 
        <>
            {icons.map((icon: Icon) => {
                // get the random coordinates first
                let index = -1;
                do { 
                    index = Math.floor(Math.random() * 4);
                }
                while (coordinateList[index] === true);
                
                // set the coordinate list index to true for next iteration
                coordinateList[index] = true;

                // place the image in the given coordinates for styles
                let coordinateStyle = coordinateStyles[index];
                
                return (
                    <Image 
                        key={icon.alt} // key needed for map
                        className={coordinateStyle}
                        src={icon.src}
                        alt={icon.alt}
                        width={icon.width}
                        height={icon.height}
                    />
                )
            })}
        </>
     );
}

export default Icon;