export const eventsData = [
  {
    id: 1,
    containerStyle: 'w-[50%] h-[50%] rounded-[25px]',
    mainImage: {
      className: 'border-4 border-solid border-gray-400 rounded-2xl',
      src: '/images/ccdc.png',
      alt: 'ccdc',
      width: 381,
      height: 470,
    },
    icons: [
      {
        src: '/svg/hacker/hacker.svg',
        alt: 'hacker',
        width: 100,
        height: 100,
      },
      {
        src: '/svg/hacker/defense.svg',
        alt: 'defense',
        width: 100,
        height: 100,
      },
    ],
    descriptionText: {
      title: ['$ cd ~/events', '$ cat ccdc.txt'],
      text: `I competed in the 2023 Northeast Collegiate Cyber Defense Competition (NECCDC) \n
              with the UMass Amherst Cybersecurity Club, where we got third place! I was a member \n
              of the Blue Team, which was tasked with defending a network from a Red Team of hackers. \n
              In specific, I worked on Linux hardening, writing various incident responses \n
              and securing the network. `,
    },
  },
];
