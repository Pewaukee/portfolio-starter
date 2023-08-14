// more general component for logos
// takes in a logo image and a link to the logo's website
import Image from 'next/image';

type LogoProps = {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const Logo: React.FC<LogoProps> = ({ url, src, alt, width, height }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center"
    >
      {/** define a group so that the underline animation is triggered from parent */}
      <span className="group/logo">
        <Image
          src={src}
          alt={alt}
          className="transition-all duration-500 ease-in-out 
        hover:scale-105"
          width={width}
          height={height}
        />{' '}
        <span
          // underline animation
          className="absolute w-full h-[2px] bg-[#0087ca] top-full left-0
      transform transition-all duration-200 ease-in-out
      scale-x-0 origin-bottom-left      
      group-hover/logo:scale-x-100"
        />
      </span>
    </a>
  );
};

export default Logo;
