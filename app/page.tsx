import { CSSProperties } from 'react';
import '../styles/globals.css';
import Mapper from './components/Mapper';
import { introData } from '../data/introData';
import { aboutMeData } from '../data/aboutMeData';
import { eventsData } from '../data/eventsData';

const goldStyledText =
  'flex justify-center items-center p-10 bg-gradient-to-br from-gray-400 to-gray-800 text-3xl';

const styles = {
  main: 'relative flex flex-row justify-between p-8 min-h-[500px] w-full fade-in-content duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800',
  leftContainer: 'w-[50%] h-[50%] mt-[25px] flex justify-center items-center',
  centerContainer:
    'w-[1px] h-[400px] bg-gray-400 left-[50%] flex justify-center items-center',
  rightContainer: 'w-[50%] h-[50%] mt-[25px] pl-[75px] flex flex-col',
};

const Home: React.FC = () => {
  const textShadow: CSSProperties = {
    textShadow:
      '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    // pass into component prop with custom styles
    <>
      {/** intro */}
      <Mapper array={introData} styles={styles} type='picture'/>

      <div className={goldStyledText}>
        <h1 className="text-yellow-400" style={textShadow}>
          <i>About Me!</i>
        </h1>
      </div>

      {/** about me */}
      <Mapper array={aboutMeData} styles={styles} type='picture'/>

      <div className={goldStyledText}>
        <h1 className="text-yellow-400" style={textShadow}>
          <i>Events</i>
        </h1>
      </div>

      {/** events */}
      <Mapper array={eventsData} styles={styles} type='picture'/>
    </>
  );
};

export default Home;
