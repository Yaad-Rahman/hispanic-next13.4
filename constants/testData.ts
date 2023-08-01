const NavMenus = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About',
    link: '/about',
  },
  {
    id: 3,
    name: 'Board',
    link: '/board',
  },
  {
    id: 4,
    name: 'Events',
    link: '/events',
  },
  {
    id: 5,
    name: 'Memories',
    link: '/memories',
  },
  {
    id: 6,
    name: 'News',
    link: '/news',
  },
  {
    id: 7,
    name: 'Links',
    link: '/links',
  },
  {
    id: 8,
    name: 'Member',
    link: '/member',
  },
  {
    id: 9,
    name: 'Contact',
    link: '/contact',
  },
];

const FooterSocial = [
  {
    id: 1,
    name: 'Twitter',
    link: '/',
  },
  {
    id: 2,
    name: 'LinkedIn',
    link: '/',
  },
  {
    id: 3,
    name: 'Facebook',
    link: '/',
  },
];

const FooterLegal = [
  {
    id: 1,
    name: 'Terms',
    link: '/terms',
  },
  {
    id: 2,
    name: 'Privacy',
    link: '/privacy',
  },
  {
    id: 3,
    name: 'Cookies',
    link: '/cookies',
  },
  {
    id: 4,
    name: 'Licences',
    link: '/licences',
  },
  {
    id: 5,
    name: 'Settings',
    link: '/settings',
  },
  {
    id: 6,
    name: 'Contact',
    link: '/Contact',
  },
];

const FooterIcons = [
  {
    href: '/',
    icon: '/logos/twitter.svg',
  },
  {
    href: '/',
    icon: '/logos/linkedin.svg',
  },
  {
    href: '/',
    icon: '/logos/facebook.svg',
  },
];

const UpcomingEventsData = [
  {
    eventName: 'Hispanic Society Borica Bash',
    eventImage: '/test/boricaBash.svg',
    date: '20 Dec 2022',
    time: '11am - 5pm',
    address: '79  Alvion AVC Queens, NYC',
    isFree: false,
    price: '$100',
  },
  {
    eventName: '3rd Annual Autism Awareness Event',
    eventImage: '/test/autismAwareness.svg',
    date: '20 Dec 2022',
    time: '11am - 5pm',
    address: 'Domino Park',
    isFree: true,
    price: '$100',
  },
  {
    eventName: 'Springtime in the City',
    eventImage: '/test/springtime.svg',
    date: '20 Dec 2022',
    time: '11am - 5pm',
    address: '299 Vandervoort AVE, BK, NY',
    isFree: false,
    price: '$50',
  },
];

const MemoriesData = [
  {
    id: 1,
    image: '/test/mem1.svg',
  },
  {
    id: 2,
    image: '/test/mem2.svg',
  },
  {
    id: 3,
    image: '/test/mem3.svg',
  },
  {
    id: 4,
    image: '/test/mem4.svg',
  },
  {
    id: 5,
    image: '/test/mem5.svg',
  },
  {
    id: 6,
    image: '/test/mem6.svg',
  },
];

const GetInTouchData = [
  {
    icon: '/logos/featured-email.svg',
    title: 'Email',
    subTitle: 'Our friendly team is here to help.',
    description: 'contact@hispanicsociety.org',
  },
  {
    icon: '/logos/featured-exclamatory.svg',
    title: 'Office',
    subTitle: 'Come say hello at our office HQ.',
    description: 'P.O. Box 110202, Brooklyn, NY',
  },
  {
    icon: '/logos/featured-phone.svg',
    title: 'Phone',
    subTitle: 'Mon-Fri from 8am to 5pm.',
    description: '+1 (555) 000-0000',
  },
];

const EventCategories = ['Upcoming', 'Past'];

const BoardMembers = {
  executive: [
    {
      name: 'Joseph Ayala',
      designation: 'President',
      profilePhoto: '/test/joseph-board.svg',
    },
    {
      name: 'Angel Ayala',
      designation: '2nd Vice President',
      profilePhoto: '/test/ayala-board.svg',
    },
    {
      name: 'Laurie Martinez',
      designation: 'Secretary',
      profilePhoto: '/test/laurie-board.svg',
    },
    {
      name: 'Arnaldo Rivera',
      designation: 'Recording Secretary',
      profilePhoto: '/test/rivera-board.svg',
    },
  ],
};

const MemoriesPageData = [
  {
    title: 'Hispanic Society Borica',
    image: '/test/hispanic.svg',
  },
  {
    title: 'Boricua Bash',
    image: '/test/boricua-bash.svg',
  },
  {
    title: 'Springtime in the City',
    image: '/test/spring-time.svg',
  },
  {
    title: 'Hispanic Society Borica',
    image: '/test/hispanic.svg',
  },
  {
    title: 'Boricua Bash',
    image: '/test/boricua-bash.svg',
  },
  {
    title: 'Springtime in the City',
    image: '/test/spring-time.svg',
  },
  {
    title: 'Hispanic Society Borica',
    image: '/test/hispanic.svg',
  },
  {
    title: 'Boricua Bash',
    image: '/test/boricua-bash.svg',
  },
  {
    title: 'Springtime in the City',
    image: '/test/spring-time.svg',
  },
];

export {
  BoardMembers,
  EventCategories,
  FooterIcons,
  FooterLegal,
  FooterSocial,
  GetInTouchData,
  MemoriesData,
  MemoriesPageData,
  NavMenus,
  UpcomingEventsData,
};
