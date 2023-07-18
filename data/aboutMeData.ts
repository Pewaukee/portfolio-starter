import createStyle from "../utils/createStyle";

export const aboutMeData = [
  {
    id: 1,
    containerStyle: 'w-[50%] h-[50%] rounded-[25px]',
    mainImage: {
      style: 'border-[3px] border-solid border-gray-400 rounded-[25px]',
      src: '/images/snowboarding.jpeg',
      alt: 'snowboarding',
      width: 350,
      height: 350,
    },
    icons: [
      {
        src: '/svg/hobbies/snowboard.svg',
        alt: 'snowboard',
        width: 100,
        height: 100,
      },
      {
        src: '/svg/hobbies/snow.svg',
        alt: 'snow',
        width: 100,
        height: 100,
      },
    ],
    descriptionText: {
      title: ['$ cd ~/hobbies', '$ cat snowboarding.txt'],
      text: `One of my favorite hobbies is snowboarding. I have been snowboarding for \n
            over 10 years now, and I have been to many mountains in the Western US. \n
            I've been to California, Nevada, Utah, Colorado, Wyoming, and Montana resorts \n
            for some powder. My personal favorite is Big Sky, Montana.`,
    },
    coordinateStyles: [
      createStyle(true, true),
      createStyle(true, false),
      createStyle(false, true),
      createStyle(false, false),
    ],
  },
  {
    id: 2,
    containerStyle: 'w-[50%] h-[50%] rounded-[20px]',
    mainImage: {
      style: 'border-[3px] border-solid border-gray-400 rounded-[20px]',
      src: '/images/chess.gif',
      alt: 'chess',
      width: 400,
      height: 400,
    },
    icons: [
      {
        src: '/svg/hobbies/chess/chess_clock.svg',
        alt: 'chess',
        width: 100,
        height: 100,
      },
      {
        src: '/svg/hobbies/chess/king.svg',
        alt: 'king',
        width: 100,
        height: 100,
      },
    ],
    descriptionText: {
      title: ['$ cd ~/hobbies', '$ cat chess.txt'],
      text: `I have been playing chess consistently for a little \n
            over a year now. I am currently rated around 1000 on chess.com! \n
            Here is a gif of a recent game I played. I had a huge attack here, \n
            usually my games don't go this well...`,
    },
    coordinateStyles: [
      createStyle(true, true),
      createStyle(true, false),
      createStyle(false, true),
      createStyle(false, false),
    ],
  },
];
