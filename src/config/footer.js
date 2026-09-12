export const footerSocials = [
  {
    name: 'Github',
    url: 'https://github.com/FUMFGRP/mountaineerfi-remote-valley-os',
    icon: "mdi:github",
  },
  {
    name: 'Youtube',
    url: 'https://youtube.com/@mountaineerfi',
    icon: "mdi:youtube",
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/mountaineer.fi',
    icon: "mdi:instagram",
  },
]

// Footer columns reference translation keys and paths; the layout resolves
// labels via the locale dictionary and prefixes paths with the locale.
export const footerColumns = [
  {
    titleKey: 'colProject',
    items: [
      { key: 'board', path: '/board' },
      { key: 'jumlaResidency', path: '/jumla' },
      { key: 'applyNow', path: '/jumla/apply' },
      { key: 'technicalBlueprint', path: '/remote-valley-os' },
    ],
  },
  {
    titleKey: 'colMore',
    items: [
      { key: 'deployRegion', path: '/regions' },
      { key: 'stories', path: '/blog' },
      { key: 'about', path: '/company/about' },
      { key: 'faq', path: '/faq' },
      { key: 'community', path: '/community' },
      { key: 'contact', path: '/company/contact' },
    ],
  },
  {
    titleKey: 'colMountaineer',
    items: [
      { key: 'mainSite', path: 'https://mountaineer.fi', external: true },
    ],
  },
];
