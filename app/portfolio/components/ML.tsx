// generate the react code for a machine learning project
import React from 'react';
import Divider from '../../components/Divider';
import Image from 'next/image';
import textShadow from '../../../data/TextShadow';

export default function ML({
  iframe, // source to the html attribute
  title,
  text,
}: {
  iframe: string;
  title: string;
  text: string;
}) {
  return (
    // set a custom attribute of data-type to ml,
    // so that the portfolio page can filter by type
    <div data-type="ml">
      <div
        className="relative flex flex-col justify-between p-2 w-full 
          fade-in-content py-8 duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800"
      >
        {/** text container */}
        <div className="relative flex flex-col justify-center items-center w-full h-full my-[25px] md:mt-0">
          <div style={textShadow} className="text-white w-[90%] justify-center">
            <div className="inline-flex mb-4">
              {/** inline flex item to display title, type, and external link (if allowed) */}
              {title} {/** title of the machine learning project */}
              {/** display svg for the type */}
              <Image
                src={'/svg/portfolio/machine_learning.svg'}
                alt={'machine learning logo'}
                width={30}
                height={30}
                className="ml-1"
              />
            </div>
            <br />
            {text} {/** description of the machine learning project */}
          </div>
        </div>

        {/** horizontal divider */}
        <div
          className="flex justify-center items-center 
            w-full my-2"
        >
          <div className="h-[1px] w-[90%] bg-white"></div>
        </div>

        {/** iframe container */}
        <div
          className="relative w-full min-h-[400px]
            flex justify-center items-center"
        >
          <div
            className="flex w-full h-full
              justify-center items-center"
          >
            <div
              className="relative mt-4 md:mt-8 w-[90%] h-auto md:my-8 min-h-full"
              dangerouslySetInnerHTML={{
                // render the iframe content with the source property
                __html: `<iframe src="${iframe}" frameborder="0" style="width: 100%; min-height: 400px;" ></iframe>`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
