// this is the page rendered on the /portfolio route
import { portfolioData } from '../../data/portfolioData';
import Divider from '../components/Divider';
import HomeElement from '../components/HomeElement';
import Mapper from '../components/Mapper';


const styles = {
  main: 'relative flex flex-row justify-between p-8 min-h-[500px] w-full fade-in-content duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800',
  leftContainer: 'w-[50%] h-[50%] mt-[25px] flex justify-center items-center',
  centerContainer: 'w-[1px] h-[400px] bg-gray-400 left-[50%] flex justify-center items-center',
  rightContainer: 'w-[50%] h-[50%] mt-[25px] pl-[75px] flex flex-col',
};

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="m-5">
        <h1 className="text-2xl flex justify-center items-center p-8">
          Welcome to my Portfolio!
        </h1>
      </div>
      {/* <div className="container m-10 border-2 border-white-600 w-auto p-10">
                <div className="flex items-center gap-6"> */}
      <Mapper array={portfolioData} styles={styles} type='video'/>
    </>
  );
};

export default Portfolio;
