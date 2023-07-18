import createStyle from "../utils/createStyle";

export const introData = [
  {
    id: 1,
    containerStyle: 'w-[50%] h-[50%]',
    mainImage: {
      style:
        'border-[3px] border-solid border-gray-400 rounded-2xl overflow-hidden',
      src: '/images/avatar.jpeg',
      alt: 'avatar',
      width: 500,
      height: 500,
    },
    icons: [
      {
        src: '/svg/hobbies/code.svg',
        alt: 'code',
        width: 100,
        height: 100,
      },
      {
        src: '/svg/hobbies/book.svg',
        alt: 'book',
        width: 100,
        height: 100,
      },
    ],
    descriptionText: {
      title: ['$ whoami'],
      text: `Hello! My name is Karthik Shankar. \n
        I am currently a student at the \n
        University of Massachusetts Amherst \n
        studying Computer Science. In my free time, \n
        I like to read, listen to music, and improve \n
        my coding skills, like you're seeing here in \n
        this website. In CS, I am particularly interested \n
        in website development, cybersecurity, and machine \n
        learning. Thank you for checking out my work!`,
    },
    coordinateStyles: [
      createStyle(true, true),
      createStyle(true, false),
      createStyle(false, true),
      createStyle(false, false),
    ],
  },
];
