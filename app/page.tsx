import { CSSProperties } from 'react';
import styles from '../styles/page.module.css'
import HomeElement from './components/HomeElement'

const Home: React.FC = () => { 

  const textShadow: CSSProperties = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    // pass into component prop with custom styles
    <div>

      {/** intro */}
      <HomeElement 
        containerStyle={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
        }}
        mainImage={
          [
            {
              border: '3px solid grey',
              borderRadius: '50%',
            },
            '/images/avatar.jpeg',
            'avatar',
            350,
            350,
          ]
        }
        icons={
          [
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
          ]
        }
        descriptionText={{
          title: ['$ whoami'],
          text:`
          Hello! My name is Karthik Shankar. \n
          I am currently a student at the \n
          University of Massachusetts Amherst \n
          studying Computer Science. In my free time, \n
          I like to read, listen to music, and improve \n
          my coding skills, like you're seeing here in \n
          this website. In CS, I am particularly interested \n
          in software engineering, cybersecurity, and machine \n
          learning. Thank you for checking out my work!
          `
        }}
        coordinateStyles={
          [
            {
              position: 'absolute',
              top: '0px',
              left: '0px',
            },
            {
              position: 'absolute',
              top: '0px',
              left: '300px',
            },
            {
              position: 'absolute',
              top: '300px',
              left: '0px',
            },
            {
              position: 'absolute',
              top: '300px',
              left: '300px',
            }
          ]
        }
      />

      <div className="flex justify-center 
      items-center p-10 bg-gradient-to-br 
      from-gray-400 to-gray-800 text-3xl">
        <h1 className="text-yellow-400" style={textShadow}><i>About Me!</i></h1>
      </div>
      
      {/** snowboarding */}
      <HomeElement 
        containerStyle={{
          width: "425px",
          height: "525px",
          borderRadius: "25px",
        }}
        mainImage={
          [
            {
              border: '3px solid grey',
              borderRadius: '25px',
            },
            '/images/snowboarding.jpeg',
            'snowboarding',
            381,
            470,
          ]
        }
        icons={
          [
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
            }
          ]
        }
        descriptionText={{
          title: ['$ cd ~/hobbies', '$ cat snowboarding.txt'],
          text:`One of my favorite hobbies is snowboarding. I have been snowboarding for \n
          over 10 years now, and I have been to many mountains in the Western US. \n
          I've been to California, Nevada, Utah, Colorado, Wyoming, and Montana resorts \n
          for some powder. My personal favorite is Big Sky, Montana.`
        }}
        coordinateStyles={
          [
            {
              position: 'absolute',
              top: '-50px',
              left: '-50px',
            },
            {
              position: 'absolute',
              top: '-50px',
              left: '350px',
            },
            {
              position: 'absolute',
              top: '450px',
              left: '-50px',
            },
            {
              position: 'absolute',
              top: '450px',
              left: '350px',
            }
          ]
        }
      />

      {/** chess game */}
      <HomeElement 
        containerStyle={{
          width: "450px",
          height: "450px",
          borderRadius: "20px",
        }}
        mainImage={
          [
            {
              border: '3px solid grey',
              borderRadius: '10px',
            },
            '/images/chess.gif',
            'chess',
            400,
            400,
          ]
        }
        icons={
          [
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
            }
          ]
        }
        descriptionText={{
          title: ['$ cd ~/hobbies', '$ cat chess.txt'],
          text:`I have been playing chess consistently for a little \n
          over a year now. I am currently rated around 1000 on chess.com! \n
          Here is a gif of a recent game I played. I had a huge attack here, \n
          usually my games don't go this well...
          `
        }}
        coordinateStyles={
          [
            {
              position: 'absolute',
              top: '-75px',
              left: '-75px',
            },
            {
              position: 'absolute',
              top: '-75px',
              left: '375px',
            },
            {
              position: 'absolute',
              top: '375px',
              left: '-75px',
            },
            {
              position: 'absolute',
              top: '375px',
              left: '375px',
            }
          ]
        }
      />

      <div className="flex justify-center 
      items-center p-10 bg-gradient-to-br 
      from-gray-400 to-gray-800 text-3xl">
        <h1 className="text-yellow-400" style={textShadow}><i>Events</i></h1>
      </div>

      {/** ccdc */}
      <HomeElement 
        containerStyle={{
          width: "425px",
          height: "525px",
          borderRadius: "25px",
        }}
        mainImage={
          [
            {
              border: '3px solid grey',
              borderRadius: '25px',
            },
            '/images/ccdc.png',
            'ccdc',
            381,
            470,
          ]
        }
        icons={
          [
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
            }
          ]
        }
        descriptionText={{
          title: ['$ cd ~/events', '$ cat ccdc.txt'],
          text:`I competed in the 2023 Northeast Collegiate Cyber Defense Competition (NECCDC) \n
          with the UMass Amherst Cybersecurity Club, where we got third place! I was a member \n
          of the Blue Team, which was tasked with defending a network from a Red Team of hackers. \n
          In specific, I worked on Linux hardening, writing various incident responses \n
          and securing the network. `
        }}
        coordinateStyles={
          [
            {
              position: 'absolute',
              top: '-25px',
              left: '-25px',
            },
            {
              position: 'absolute',
              top: '-25px',
              left: '350px',
            },
            {
              position: 'absolute',
              top: '450px',
              left: '-25px',
            },
            {
              position: 'absolute',
              top: '450px',
              left: '350px',
            }
          ]
        }

      />
    </div>

  )
}

export default Home;