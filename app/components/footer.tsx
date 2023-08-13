// create the footer component
import ThreeComponent from './ThreeComponent';
import Logo from './Logo';

const Footer: React.FC = () => {
  // create the source components
  const nextjs = (
    <div className="invert">
      <Logo
        url="https://nextjs.org/"
        src="/svg/socials/next.svg"
        alt="NextJS Logo"
        width={50}
        height={50}
      />
    </div>
  );
  const vercel = (
    <div className="invert">
      <Logo
        url="https://vercel.com/"
        src="/svg//socials/vercel.svg"
        alt="Vercel Logo"
        width={50}
        height={50}
      />
    </div>
  );
  const framer = (
    <Logo
      url="https://www.framer.com/motion/"
      src="/images/framer.png"
      alt="Framer Motion Logo"
      width={30}
      height={30}
    />
  );

  // initialize the social media dimensions
  const width = 30;
  const height = 30;

  // initialize the social media logos
  const github = (
    <div className="invert">
      <Logo
        url="https://github.com/pewaukee"
        src="/svg/socials/github.svg"
        alt="Github Logo"
        width={width}
        height={height}
      />
    </div>
  );
  const linkedin = (
    <Logo
      url="https://www.linkedin.com/in/karthik-shankar-6943b122a/"
      src="/svg/socials/linkedin.svg"
      alt="LinkedIn Logo"
      width={width}
      height={height}
    />
  );
  const twitter = (
    <Logo
      url="https://twitter.com/pewaukee710"
      src="/svg/socials/twitter.svg"
      alt="Twitter Logo"
      width={width}
      height={height}
    />
  );
  const youtube = (
    <Logo
      url="https://www.youtube.com/channel/UCQ6ZI2qKlZqO5yf2wvzX2jQ"
      src="/svg/socials/youtube.svg"
      alt="Youtube Logo"
      width={width}
      height={height}
    />
  );

  // initiailze the footer components
  const left = (
    <div className="flex items-center justify-between">
      Made with
      <span className="inline-flex">{nextjs}</span>,
      <span className="inline-flex">{vercel}</span>, and
      <span className="inline-flex pl-[5px]">{framer}</span>.
    </div>
  );
  const center = (
    <a href="mailto:karthik.shankar710@gmail.com">
      karthik.shankar710@gmail.com
    </a>
  );
  const right = (
    <div className="whitespace-nowrap flex items-center pr-2">
      {[github, linkedin, twitter, youtube].map((logo, index) => (
        <div key={index} className="pr-2 inline-block relative ">
          {logo}
        </div>
      ))}
    </div>
  );

  return (
    <main
      className="flex flex-col lg:flex-row relative justify-center lg:justify-between items-center h-[100px] w-full z-50 italic 
      bg-gradient-to-r from-[#1080cab4] to-[#062f8c90] 
      border-t-[3px] border-solid border-black"
      style={{ boxShadow: '0 2px 10px rgb(255, 255, 255)' }}
    >
      <div className="hidden lg:flex flex-row items-center font-extrabold pl-[5%]">
        {left}
      </div>
      <div className="block lg:absolute left-1/2 lg:-translate-x-1/2 mb-[15px] lg:mb-0">{center}</div>
      <div className="flex justify-between items-center pl-[5%] lg:pl-0 pr-[5%]">{right}</div>
    </main>
  );
};

export default Footer;
