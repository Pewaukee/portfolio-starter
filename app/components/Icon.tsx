import Image from 'next/image';

interface Icon {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface IconProps {
  icons: Icon[];
}

const Icon: React.FC<IconProps> = ({ icons }) => {
  // random list to place the corner images
  // [top left, top right, bottom left, bottom right]
  // represent occupied spaces
  const coordinateList = [false, false, false, false];

  const coordinateStyles = [
    'absolute top-[80%] left-[80%] z-10',
    'absolute top-[80%] left-[-10%] z-10',
    'absolute top-[-10%] left-[80%] z-10',
    'absolute top-[-10%] left-[-10%] z-10',
  ]

  return (
    <>
      {icons.map((icon: Icon) => {
        // get the random coordinates first
        let index = -1;
        do {
          index = Math.floor(Math.random() * 4);
        } while (coordinateList[index] === true);

        // set the coordinate list index to true for next iteration
        coordinateList[index] = true;

        // place the image in the given coordinates for styles
        const coordinateStyle = coordinateStyles[index];

        return (
          <Image
            key={icon.alt} // key needed for map
            className={coordinateStyle}
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
          />
        );
      })}
    </>
  );
};

export default Icon;
