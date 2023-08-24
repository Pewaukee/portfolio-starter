// generate the react code for a website project, with video, description, and the like
import React from 'react';
import FadeUp from '../../components/FadeUp';
import Icons from '../../components/Icon';
import Video from './Video';
import Description from '../../components/Description';
import Divider from '../../components/Divider';

export default function Web({
  icons,
  src,
  title,
  text,
  divider = true,
}: {
  icons: string[];
  src: string;
  title: string;
  text: string;
  divider?: boolean;
}) {
  return (
    // set a custom attribute of data-type to web, 
    // so that the portfolio page can filter by type
    <div data-type='web'>
      <FadeUp
        className="relative flex flex-col md:flex-row justify-between p-2 w-full 
          fade-in-content py-8 duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800"
      >
        <div
          className="relative w-full md:w-[50%] h-full 
            flex justify-center items-center mb-[40px] md:mb-0"
        >
          <div
            className="flex w-full flex-col md:flex-row 
              justify-center items-center"
          >
            <div className="relative mt-4 md:mt-8 w-[50%] md:w-[90%] h-auto md:my-8">
              <Icons srcs={icons} />
              <Video src={src} />
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center 
            w-full md:w-[1px] h-[1px] md:h-auto left-[50%]
            bg-white mx-2"
        ></div>
        <div className="flex flex-col justify-center items-center w-full md:w-[50%] h-full pl-[5%] mt-[25px] md:mt-0">
          <Description title={title} text={text} />
        </div>
      </FadeUp>
      {divider ? <Divider /> : null}
    </div>
  );
}