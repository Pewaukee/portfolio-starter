const portfolioData: {
  src: string;
  icons: string[];
  title: string[];
  text: string;
  type: string;
}[] = [
  {
    src: '/projects/modern_shopper.mp4',
    icons: [
      '/svg/portfolio/shopping_basket.svg',
      '/svg/portfolio/online_shopping.svg',
    ],
    title: ['Modern Shopper'],
    text: `I used selenium to create an automated shopping
         experience from a command line interface. Using the 
         Selenium WebDriver, I was able to put in a prompt for
          an item and get the most relevant results from Amazon's 
          database of millions of products. This project could be
           used as an API or as a way to more efficiently shop online. 
           With Chrome being automatically controlled, so much more 
           is possible!`,
    type: 'other',
  },
  {
    src: '/projects/spotify.mp4',
    icons: ['/svg/portfolio/music_note.svg', '/svg/portfolio/guitar.svg'],
    title: ['Spotify Clone'],
    text: `I used the Deezer API to create a clone of 
        the popular music streaming service Spotify. You can search
        for music, artists, and albums, and play them in the browser.
        In this project, I learned a lot about the complexities of
        state management throughout an application. I also learned about
        complexities of front-end development, and learned how to use
        Radix UI Components as well as my own custom elements to make a
        unique UI experience for the user to enjoy.`,
    type: 'web',
  },
  {
    src: '/projects/ssa.mp4',
    icons: ['/svg/portfolio/scroll.svg'],
    title: ['Stoic Student Association Website'],
    text: `I created a website for the Stoic Student Association, a club
        at the University of Massachusetts Amherst. I used the Next JS
        framework to create a website that is easy to maintain and update
        for the club. I also used the Tailwind CSS framework to create a
        beautiful and responsive UI for the website. I learned a lot about
        using custom font styles and creating a personalized asthetic for a brand.`,
    type: 'web',
  },
  {
    src: '/projects/temple.mp4',
    icons: ['/svg/portfolio/temple.svg', '/svg/portfolio/lotus.svg'],
    title: ['Las Vegas ISKCON Temple Website'],
    text: `I help to maintain the Las Vegas ISKCON temple website. I have
    worked on various new features, refactors, and improvements over the past couple months.
    I have worked a lot on custom styling, which can be seen by the minor
    adjustements throughout the website that bring it together. Furthermore, I sculpted a custom
    color scheme to match a non-profit organization, in hopes to attract more visitors to the temple.
    Lastly, accessibility was a main focus, both in terms of disabled users and mobile users, to make
    sure everyone has a great experience.`,
    type: 'web',
  },
  {
    src: '/projects/website.mp4',
    icons: ['/svg/portfolio/webdev_1.svg', '/svg/portfolio/webdev_2.svg'],
    title: ['Personal Website Project'],
    text: `In this project, I have learned and am continuing 
        to learn much more about website development using 
        the Next JS framework. I have also learned how to work 
        with complex CSS styling and animations like framer 
        motion and keyframe animations, all essential to 
        making a website look more than simply a static page. 
        It has been a fun journey so far, here's to more web dev!`,
    type: 'web',
  },
];

export default portfolioData;
