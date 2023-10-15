// generate the react code for a machine learning project
import React from 'react';
import Divider from '../../components/Divider';
import textShadow from '../../../data/TextShadow';
import { ExternalLink } from 'lucide-react';

export default function Other({
  concept, // elelment of the concept
  title,
  text,
  externalLink, // link to the source code
  logo,
}: {
  concept: JSX.Element;
  title: string;
  text: string;
  externalLink: string;
  logo?: JSX.Element; // logo of the type, if applicable
}) {
  return (
    // set a custom attribute of data-type to other,
    // so that the portfolio page can filter by type
    <div data-type="other">
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
              {logo}
              <a href={externalLink} target="_blank">
                {' '}
                {/** link to source is same as iframe */}
                <ExternalLink className="ml-[5px]" />{' '}
                {/** external link icon to source */}
              </a>
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

        {/** concept container */}
        <div
          className="relative w-full h-auto
            flex justify-center items-center"
        >
          <div
            className="flex w-full h-full
              justify-center items-center"
          >
            <div className="relative mt-4 md:mt-8 w-[90%] h-auto md:my-8">
              {concept}
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
