import '../styles/globals.css';
import Mapper from './components/Mapper';
import { introData } from '../data/introData';
import { aboutMeData } from '../data/aboutMeData';
import { eventsData } from '../data/eventsData';
import { textShadow } from '../data/TextShadow';

const Home: React.FC = () => {
  
  const goldStyledText =
    'flex justify-center items-center p-10 bg-gradient-to-br from-gray-400 to-gray-800 text-3xl';

  const styles = {
    main: 'relative flex flex-row justify-between p-8 min-h-[500px] w-full fade-in-content duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800',
    leftContainer: 'relative w-[50%] h-full pr-[2%]',
    centerContainer:
      'w-[1px] h-full bg-white left-[50%] flex justify-center items-center',
    rightContainer:
      'w-[50%] h-full pl-[5%] flex flex-col jsutify-center items-center',
  };

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
