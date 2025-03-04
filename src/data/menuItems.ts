import { StaticImageData } from 'next/image';

type MenuItem = {
  title: string;
  icon?: string;
  items?: {
    title: string;
    href: string;
  }[];
};

export const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: '/globe.svg',
    items: [
      {
        title: 'Analytics',
        href: '/dashboard/analytics'
      },
      {
        title: 'Overview',
        href: '/dashboard/overview'
      }
    ]
  },
  {
    title: 'Projects',
    icon: '/window.svg',
    items: [
      {
        title: 'All Projects',
        href: '/projects/all'
      },
      {
        title: 'Active',
        href: '/projects/active'
      }
    ]
  },
  {
    title: 'Files',
    icon: '/file.svg',
    items: [
      {
        title: 'Documents',
        href: '/files/documents'
      },
      {
        title: 'Media',
        href: '/files/media'
      }
    ]
  }
];