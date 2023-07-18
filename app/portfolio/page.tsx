// this is the page rendered on the /portfolio route
import Divider from '../components/Divider';
import HomeElement from '../components/HomeElement';

// dynamically create the styles for the corner images (icons)
function createStyle(top: boolean, left: boolean): string {
  // based on activation to move a certain percentage on the container
  if (top && left) return `absolute top-far left-[90%]`;
  else if (top && !left) return `absolute top-far left-near`;
  else if (!top && left) return `absolute top-near left-[90%]`;
  else return `absolute top-near left-near`;
}

const styles = {
  main: 'relative flex justify-between p-8 min-h-[500px] fade-in-content duration-75 ease-in-out bg-gradient-radial from-gray-700 to-gray-800',
  leftContainer: 'w-[70%] h-[70%] ml-[10%] mr-[10%] mt-[25px]',
  centerContainer: 'absolute w-[1px] h-[400px] bg-gray-400 left-[50%]',
  rightContainer: 'absolute w-[35%] h-[50%] mr-[10%] left-[60%] mt-[25px]',
};

const information = [
  {
    id: 1,
    containerStyle:
      'flex w-[50%] h-[50%] justify-center items-center shadow-lg',
    mainImage: {
      style: 'border-[3px] rounded-lg',
      src: '/projects/website.gif',
      alt: 'project website gif',
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
    coordinateStyles: [
      createStyle(true, true),
      createStyle(true, false),
      createStyle(false, true),
      createStyle(false, false),
    ],
  },
  {
    id: 2,
    containerStyle:
      'flex w-[50%] h-[50%] justify-center items-center shadow-lg',
    mainImage: {
      style: 'border-[3px] rounded-lg',
      src: '/projects/modern_shopper.gif',
      alt: 'modern shopper project',
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
      text: "I used selenium to create an automated shopping experience from a command line interface. Using the Selenium WebDriver, I was able to put in a prompt for an item and get the most relevant results from Amazon's database of millions of products. This project could be used as an API or as a way to more efficiently shop online. With Chrome being automatically controlled, much more is possible!",
    },
    coordinateStyles: [
      createStyle(true, true),
      createStyle(true, false),
      createStyle(false, true),
      createStyle(false, false),
    ],
  },
];

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
      {information.map((info, index) => (
        <div key={info.id}>
          <HomeElement
            containerStyle={info.containerStyle}
            mainImage={info.mainImage}
            icons={info.icons}
            descriptionText={info.descriptionText}
            coordinateStyles={info.coordinateStyles}
            styles={styles}
          />
          {index !== information.length - 1 ? <Divider height={100} /> : null}
        </div>
      ))}
    </>
  );
};

export default Portfolio;
