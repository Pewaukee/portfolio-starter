import Image from 'next/image';

export default function Icons({ srcs }: { srcs: string[] }) {
  // random list to place the corner images
  // [top left, top right, bottom left, bottom right]
  // represent occupied spaces
  const coordinateList = [false, false, false, false];

  const coordinateStyles = [
    'w-[20%] h-[20%] absolute top-[90%] left-[90%] z-20',
    'w-[20%] h-[20%] absolute top-[90%] left-[-10%] z-20',
    'w-[20%] h-[20%] absolute top-[-10%] left-[90%] z-20',
    'w-[20%] h-[20%] absolute top-[-10%] left-[-10%] z-20',
  ];

  return (
    <>
      {srcs.map((src) => {
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
            key={index}
            className={coordinateStyle}
            src={src}
            alt={src}
            width={70}
            height={70}
            aria-hidden="true"
          />
        );
      })}
    </>
  );
}
