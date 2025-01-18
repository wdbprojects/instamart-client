import { ReactElement } from "react";
import {
  Cog,
  Group,
  HeartPulse,
  House,
  PackageCheck,
  ShoppingCart,
  Store,
} from "lucide-react";

type NavLink = {
  id: number;
  href: string;
  label: string;
  icon: ReactElement;
};

export const userMenuLinks: NavLink[] = [
  {
    id: 1,
    href: "/",
    label: "home",
    icon: <House className="mr-2 h-4 w-4" />,
  },
  {
    id: 2,
    href: "/about",
    label: "about",
    icon: <Group className="mr-2 h-4 w-4" />,
  },
  {
    id: 3,
    href: "/products",
    label: "products",
    icon: <Store className="mr-2 h-4 w-4" />,
  },
  {
    id: 4,
    href: "/favorites",
    label: "favorites",
    icon: <HeartPulse className="mr-2 h-4 w-4" />,
  },
  {
    id: 5,
    href: "/cart",
    label: "cart",
    icon: <ShoppingCart className="mr-2 h-4 w-4" />,
  },
  {
    id: 6,
    href: "/orders",
    label: "orders",
    icon: <PackageCheck className="mr-2 h-4 w-4" />,
  },
  {
    id: 7,
    href: "/settings",
    label: "settings",
    icon: <Cog className="mr-2 h-4 w-4" />,
  },
];

/* SUBMENU */
export const subMenuLinks = [
  {
    id: 1,
    name: "Today's Deal",
    href: "/search?tag=todays-deal",
  },
  {
    id: 2,
    name: "New Arrivals",
    href: "/search?tag=new-arrival",
  },
];

export const moreSubMenuLinks = [
  {
    id: 0,
    name: "Featured Products",
    href: "/search?tag=featured",
  },
  {
    id: 1,
    name: "Best Sellers",
    href: "/search?tag=best-seller",
  },
  {
    id: 2,
    name: "Browsing History",
    href: "/#browsing-history",
  },
  {
    id: 3,
    name: "Customer Service",
    href: "/page/customer-service",
  },
  {
    id: 4,
    name: "About Us",
    href: "/page/about-us",
  },
  {
    id: 5,
    name: "Help",
    href: "/page/help",
  },
];

/* SIDEBAR */

export const dataSidebar = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
};
