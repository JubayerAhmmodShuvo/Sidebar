// menuItems.ts */

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
        href: '/sidebar/dashboard/analytics'
      },
      {
        title: 'Overview',
        href: '/sidebar/dashboard/overview'
      }
    ]
  },
  {
    title: 'Projects',
    icon: '/window.svg',
    items: [
      {
        title: 'All Projects',
        href: '/sidebar/projects/all'
      },
      {
        title: 'Active',
        href: '/sidebar/projects/active'
      }
    ]
  },
  {
    title: 'Files',
    icon: '/file.svg',
    items: [
      {
        title: 'Documents',
        href: '/sidebar/files/documents'
      },
      {
        title: 'Media',
        href: '/sidebar/files/media'
      }
    ]
  }
];