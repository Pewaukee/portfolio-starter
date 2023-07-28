export const portfolioData = [
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