// this is the page rendered on the /portfolio route
import Description from '../components/Description';
import Divider from '../components/Divider';
import FadeUp from '../components/FadeUp';
import Icon from '../components/Icon';
import Video from './components/Video';
import { portfolioData } from '../../data/portfolioData';

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-600 py-8">
        <h1 className="text-2xl">Welcome to my Portfolio!</h1>
      </div>
      {portfolioData.map((data, index) => (
        <main key={index}>
          <FadeUp
            className="relative flex flex-col md:flex-row justify-between p-2 md:min-h-[400px] w-full 
          fade-in-content duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800"
          >
            <div className="relative w-full md:w-[50%] h-full flex justify-center items-center mb-[40px] md:mb-0">
              <div className="flex w-full flex-col md:flex-row justify-center items-center">
                <div className="relative mt-4 md:mt-8 w-[90%] h-auto">
                  <Icon icons={data.icons} />
                  <Video src={data.src} />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[1px] h-[1px] md:h-full bg-white left-[50%] flex justify-center items-center"></div>
            <div className="w-full md:w-[50%] h-full pl-[5%] mt-[25px] md:mt-0 flex flex-col justify-center items-center">
              <Description title={data.title} text={data.text} />
            </div>
          </FadeUp>
          {index !== portfolioData.length - 1 ? <Divider /> : null}
        </main>
      ))}
    </>
  );
};

export default Portfolio;
