import createStyle from "../utils/createStyle";

export const portfolioData = [
    {
      id: 1,
      containerStyle:
        'flex w-[75%] h-[75%] justify-center items-center shadow-lg',
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
        'flex w-[75%] h-[75%] justify-center items-center shadow-lg',
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