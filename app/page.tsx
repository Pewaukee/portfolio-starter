import styles from '../styles/page.module.css'

import HomePicture from './HomePicture'

const Home: React.FC = () => { 

  return (
    // pass into component prop with custom styles
    <div>

      {/** first component of intro */}
      <HomePicture 
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
            src: '/svg/code.svg',
            alt: 'code',
            width: 100,
            height: 100,
            },
            {
            src: '/svg/book.svg',
            alt: 'book',
            width: 100,
            height: 100,
            },
          ]
        }
        descriptionText={{
          title: '$ whoami',
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
      />

      {/** second component of snowboarding */}
      <HomePicture 
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
              src: '/svg/snowboard.svg',
              alt: 'snowboard',
              width: 200,
              height: 200,
            },
            {
              src: '/svg/snow.svg',
              alt: 'snow',
              width: 200,
              height: 200,
            }
          ]
        }
        descriptionText={{
          title: '$ cat snowboarding.txt',
          text:`One of my favorite hobbies is snowboarding. I have been snowboarding for \n
          over 10 years now, and I have been to many mountains in the Western US. \n
          I've been to California, Nevada, Utah, Colorado, Wyoming, and Montana resorts \n
          for some powder. My personal favorite is Big Sky, Montana.`
        }}
      />

      {/** third component of ccdc */}
      <HomePicture 
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
              src: '/svg/hacker.svg',
              alt: 'hacker',
              width: 200,
              height: 200,
            },
            {
              src: '/svg/defense.svg',
              alt: 'defense',
              width: 200,
              height: 200,
            }
          ]
        }
        descriptionText={{
          title: '$ cat ccdc.txt',
          text:`I competed in the 2023 Northeast Collegiate Cyber Defense Competition (NECCDC) \n
          with the UMass Amherst Cybersecurity Club, where we got third place! I was a member \n
          of the Blue Team, which was tasked with defending a network from a Red Team of hackers. \n
          In specific, I worked on Linux hardening, wrote various incident responses, \n
          and helped to secure the network. `
        }}

      />
    </div>

    // define the accomplishments
  )
}

export default Home;