import { CSSProperties } from 'react';
import HomeElement from './components/HomeElement';
import '../styles/globals.css';

// dynamically create the styles for the corner images (icons)
function createStyle(top: boolean, left: boolean): string {
  // based on activation to move a certain percentage on the container
  if (top && left) return `absolute top-far left-far`;
  else if (top && !left) return `absolute top-far left-near`;
  else if (!top && left) return `absolute top-near left-far`;
  else return `absolute top-near left-near`;
}

const introData = [
  {
    id: 1,
    containerStyle: 'w-[400px] h-[400px] rounded-[50%]',
    mainImage: {
      style: 'border-[3px] border-solid border-gray-400 rounded-[50%]',
      src: '/images/avatar.jpeg',
      alt: 'avatar',
      width: 350,
      height: 350,
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
      in software engineering, cybersecurity, and machine \n
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

const aboutMeData = [
  {
    id: 1,
    containerStyle: 'w-[425px] h-[525px] rounded-[25px]',
    mainImage: {
      style: 'border-[3px] border-solid border-gray-400 rounded-[25px]',
      src: '/images/snowboarding.jpeg',
      alt: 'snowboarding',
      width: 381,
      height: 470,
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
    containerStyle: 'w-[450px] h-[450px] rounded-[20px]',
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

const eventsData = [
  {
    id: 1,
    containerStyle: 'w-[425px] h-[525px] rounded-[25px]',
    mainImage: {
      style: 'border-[3px] border-solid border-gray-400 rounded-[25px]',
      src: '/images/ccdc.png',
      alt: 'ccdc',
      width: 381,
      height: 470,
    },
    icons: [
      {
        src: '/svg/hacker/hacker.svg',
        alt: 'hacker',
        width: 100,
        height: 100,
      },
      {
        src: '/svg/hacker/defense.svg',
        alt: 'defense',
        width: 100,
        height: 100,
      },
    ],
    descriptionText: {
      title: ['$ cd ~/events', '$ cat ccdc.txt'],
      text: `I competed in the 2023 Northeast Collegiate Cyber Defense Competition (NECCDC) \n
            with the UMass Amherst Cybersecurity Club, where we got third place! I was a member \n
            of the Blue Team, which was tasked with defending a network from a Red Team of hackers. \n
            In specific, I worked on Linux hardening, writing various incident responses \n
            and securing the network. `,
    },
    coordinateStyles: [
      createStyle(true, true),
      createStyle(true, false),
      createStyle(false, true),
      createStyle(false, false),
    ],
  },
];

const Home: React.FC = () => {
  const textShadow: CSSProperties = {
    textShadow:
      '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    // pass into component prop with custom styles
    <>
      {/** intro */}
      {introData.map((data) => {
        return (
          <HomeElement
            key={data.id}
            containerStyle={data.containerStyle}
            mainImage={data.mainImage}
            icons={data.icons}
            descriptionText={data.descriptionText}
            coordinateStyles={data.coordinateStyles}
          />
        );
      })}

      <div
        className="flex justify-center 
      items-center p-10 bg-gradient-to-br 
      from-gray-400 to-gray-800 text-3xl"
      >
        <h1 className="text-yellow-400" style={textShadow}>
          <i>About Me!</i>
        </h1>
      </div>

      {/** about me */}
      {aboutMeData.map((data) => {
        return (
          <HomeElement
            key={data.id}
            containerStyle={data.containerStyle}
            mainImage={data.mainImage}
            icons={data.icons}
            descriptionText={data.descriptionText}
            coordinateStyles={data.coordinateStyles}
          />
        );
      })}

      <div
        className="flex justify-center 
      items-center p-10 bg-gradient-to-br 
      from-gray-400 to-gray-800 text-3xl"
      >
        <h1 className="text-yellow-400" style={textShadow}>
          <i>Events</i>
        </h1>
      </div>

      {/** events */}
      {eventsData.map((data) => {
        return (
          <HomeElement
            key={data.id}
            containerStyle={data.containerStyle}
            mainImage={data.mainImage}
            icons={data.icons}
            descriptionText={data.descriptionText}
            coordinateStyles={data.coordinateStyles}
          />
        );
      })}
    </>
  );
};

export default Home;
