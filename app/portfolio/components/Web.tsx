// generate the react code for a website project, with video, description, and the like
import React from 'react';
import Icons from '../../components/Icon';
import Divider from '../../components/Divider';
import Image from 'next/image';
import textShadow from '../../../data/TextShadow';
import { ExternalLink } from 'lucide-react';

export default function Web({
  icons,
  element,
  title,
  text,
  externalLink, // link to the live preview
}: {
  icons?: string[];
  element: JSX.Element;
  title: string;
  text: string;
  externalLink: string;
}) {
  return (
    // set a custom attribute of data-type to web,
    // so that the portfolio page can filter by type
    <div data-type="web">
      <div
        className="relative flex flex-col md:flex-row justify-between p-2 w-full 
          fade-in-content py-8 duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800"
      >
        {/** left container for the video element */}
        <div
          className="relative w-full md:w-[50%] h-full 
            flex justify-center items-center mb-[40px] md:mb-0"
        >
          <div
            className="flex w-full flex-col md:flex-row 
              justify-center items-center"
          >
            <div className="relative mt-4 md:mt-8 w-[90%] h-auto md:my-8">
              {icons ? <Icons srcs={icons} /> : null}
              {element}
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center 
            w-full md:w-[1px] h-[1px] md:h-auto left-[50%]
            bg-white mx-2"
        ></div>
        <div className="flex flex-col items-center w-full md:w-[50%] h-full pl-[5%] mt-[25px] md:mt-0">
          <div style={textShadow} className="text-white">
            {title} {/** title of the web project */}
            <div className="inline-flex mb-4">
              {/** inline flex item to display type of website */}
              <Image
                src={'/svg/portfolio/website.svg'}
                alt={'website logo'}
                width={30}
                height={30}
                className="ml-1"
              />
              <a href={externalLink} target="_blank">
                <ExternalLink className="ml-[5px]" />{' '}
              </a>
            </div>
            <br />
            {text} {/** description of the web project */}
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
