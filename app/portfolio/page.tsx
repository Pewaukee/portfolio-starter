// this is the page rendered on the /portfolio route
import Mapper from '../components/Mapper';

const Portfolio: React.FC = () => {

  const styles = {
    main: 'relative flex flex-row justify-between p-8 min-h-[400px] w-full fade-in-content duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800',
    leftContainer: 'relative w-[50%] h-full flex justify-center items-center',
    centerContainer: 'w-[1px] h-full bg-white left-[50%] flex justify-center items-center',
    rightContainer: 'w-[50%] h-full pl-[5%] flex flex-col justify-center items-center',
  };

  const portfolioData = [
    {
      id: 1,
      containerStyle:
        'flex w-[75%] h-[75%] justify-center items-center shadow-lg',
      mainImage: {
        className: 'border-4 rounded-2xl',
        src: '/projects/website.mp4',
        alt: 'project website video',
        width: 1000,
        height: 1000,
      },
      icons: [
        {
          src: '/svg/portfolio/webdev_1.svg',
          alt: 'webdev icon',
          width: 70,
          height: 70,
        },
        {
          src: '/svg/portfolio/webdev_2.svg',
          alt: 'webdev icon',
          width: 70,
          height: 70,
        },
      ],
      descriptionText: {
        title: ['Personal Website Project'],
        text: "In this project, I have learned and am continuing to learn much more about website development using the Next JS framework. I have also learned how to work with complex CSS styling and animations like framer motion and keyframe animations, all essential to making a website look more than simply a static page. It has been a fun journey so far, here's to more web dev!",
      },
    },
    {
      id: 2,
      containerStyle:
        'flex w-[85%] h-[85%] justify-center items-center shadow-lg',
      mainImage: {
        className: 'border-4 rounded-2xl',
        src: '/projects/modern_shopper.mp4',
        alt: 'modern shopper project video',
        width: 1000,
        height: 1000,
      },
      icons: [
        {
          src: '/svg/portfolio/shopping_basket.svg',
          alt: 'shopping basket icon',
          width: 70,
          height: 70,
        },
        {
          src: '/svg/portfolio/online_shopping.svg',
          alt: 'online shopping icon',
          width: 70,
          height: 70,
        },
      ],
      descriptionText: {
        title: ['Modern Shopper'],
        text: "I used selenium to create an automated shopping experience from a command line interface. Using the Selenium WebDriver, I was able to put in a prompt for an item and get the most relevant results from Amazon's database of millions of products. This project could be used as an API or as a way to more efficiently shop online. With Chrome being automatically controlled, so much more is possible!",
      },
    },
  ];

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
