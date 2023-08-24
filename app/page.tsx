import '../styles/globals.css';
import { textShadow } from '../data/TextShadow';
import FadeUp from './components/FadeUp';
import Description from './components/Description';
import Divider from './components/Divider';
import Image from 'next/image';
import homeData from '../data/homeData';
import Icons from './components/Icon';

const Home: React.FC = () => {
  const goldStyledText =
    'flex justify-center items-center p-10 bg-gradient-to-br from-gray-400 to-gray-800 text-3xl';

  const renderBreaks = (index: number) => {
    // if at the end of intro section, render the About Me section header
    if (index === 0) {
      return (
        <div className={goldStyledText}>
          <h1 className="text-yellow-400" style={textShadow}>
            <i>About Me!</i>
          </h1>
        </div>
      );
    }
    // if at the end of about me section, render the events header
    else if (index === 2) {
      return (
        <div className={goldStyledText}>
          <h1 className="text-yellow-400" style={textShadow}>
            <i>Events!</i>
          </h1>
        </div>
      );
    }
    // otherwise, render a break
    else {
      return <Divider />;
    }
  };

  return (
    <>
      {homeData.map((data, index) => (
        // TODO: fix scrolling issue
        <div key={index}>
          <FadeUp
            className="relative flex flex-col md:flex-row justify-between
            p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 w-full h-auto fade-in-content
            duration-75 ease-in-out 
            bg-gradient-radial from-gray-700 to-gray-800"
          >
            <div className="flex justify-center items-center relative w-full md:w-[50%]">
              <div
                className="w-[80%] md:w-[50%] h-full
               mb-4 md:mb-0 mt-4 md:mt-8"
              >
                <div className="relative">
                  <Icons srcs={data.icons} />
                  <Image
                    src={data.mainImage.src}
                    alt={data.mainImage.alt}
                    width={data.mainImage.width}
                    height={data.mainImage.height}
                    className="rounded-2xl border-4 border-solid border-gray-400 object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-[1px] h-[1px] md:h-auto
                 bg-white left-[50%] flex justify-center items-center"
            />
            <div
              className="w-full md:w-[50%] h-full pl-[5%] flex flex-col 
                 justify-center items-center mt-[20px] md:mt-0"
            >
              <Description title={data.title} text={data.text} />
            </div>
          </FadeUp>
          {/** if at last index, don't call this function, data is done */}
          {index !== homeData.length - 1 ? renderBreaks(index) : null}
        </div>
      ))}
    </>
  );
};

export default Home;
