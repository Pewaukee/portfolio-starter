import '../styles/globals.css';
import Mapper from './components/Mapper';
import { textShadow } from '../data/TextShadow';

const Home: React.FC = () => {

  const goldStyledText =
    'flex justify-center items-center p-10 bg-gradient-to-br from-gray-400 to-gray-800 text-3xl';

  const styles = {
    main: 'relative flex flex-col md:flex-row justify-between p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 min-h-[500px] w-full fade-in-content duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800',
    leftContainer: 'relative w-full md:w-[50%] h-full pr-[2%] mb-[40px] md:mb-0',
    centerContainer:
      'w-full md:w-[1px] h-[1px] md:h-full bg-white left-[50%] flex justify-center items-center',
    rightContainer:
      'w-full md:w-[50%] h-full pl-[5%] flex flex-col jsutify-center items-center mt-[20px] md:mt-0',
  };

  const eventsData = [
    {
      id: 1,
      containerStyle: 'w-[50%] h-[50%] rounded-[25px]',
      mainImage: {
        className: 'border-4 border-solid border-gray-400 rounded-2xl h-full w-full',
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
    },
  ];
  
  const introData = [
    {
      id: 1,
      containerStyle: 'w-[50%] h-[50%]',
      mainImage: {
        className:
          'border-4 border-solid border-gray-400 rounded-2xl w-full h-full',
        src: '/images/avatar.jpeg',
        alt: 'avatar',
        width: 400,
        height: 400,
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
    },
  ];
  
  const aboutMeData = [
    {
      id: 1,
      containerStyle: 'w-[50%] h-[50%] rounded-[25px]',
      mainImage: {
        className: 'border-4 border-solid border-gray-400 rounded-2xl w-full h-full',
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
    },
    {
      id: 2,
      containerStyle: 'w-[50%] h-[50%] rounded-[20px]',
      mainImage: {
        className: 'border-4 border-solid border-gray-400 rounded-2xl w-full h-full',
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
    },
  ];
  

  return (
    // pass into component prop with custom styles
    <>
      {/** intro */}
      <Mapper array={introData} styles={styles} type="picture" />

      <div className={goldStyledText}>
        <h1 className="text-yellow-400" style={textShadow}>
          <i>About Me!</i>
        </h1>
      </div>

      {/** about me */}
      <Mapper array={aboutMeData} styles={styles} type="picture" />

      <div className={goldStyledText}>
        <h1 className="text-yellow-400" style={textShadow}>
          <i>Events</i>
        </h1>
      </div>

      {/** events */}
      <Mapper array={eventsData} styles={styles} type="picture" />
    </>
  );
};

export default Home;
