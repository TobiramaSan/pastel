import {
  CardProps,
  ColorCardProps,
  FooterLinksProps,
  FooterProps,
} from "@/types/types";

const CardData: CardProps[] = [
  {
    title: "SIMs",
    description:
      "Explore our comprehensive range of SIMs to find the perfect fit for your connectivity needs.",
    buttonName: "SIM",
    secondaryButtonName: "",
    color: "#c189ff",
    image:
      "https://res.cloudinary.com/dwtjcpszy/image/upload/v1745587566/featured-sim_dtcrei.jpg",
  },
  {
    title: "eSIMs",
    description:
      "Our secure, scalable eSIMs deliver on-demand reliability for Consumer, IoT, and M2M applications.",
    buttonName: "eSIMs",
    secondaryButtonName: "eSIM Interoperability",
    color: "#18e1f3",
    image:
      "https://res.cloudinary.com/dwtjcpszy/image/upload/v1745587568/featured-esim_egisdy.jpg",
  },
  {
    title: "eSIM",
    broken: "Solutions",
    description:
      "Manage eSIM subscriptions and streamline consumer onboarding to drive acquisition and retention.",
    buttonName: "Remote SIM Provisioning",
    secondaryButtonName: "eSIM Onboarding Journeys",
    color: "#2ee76f",
    image:
      "https://res.cloudinary.com/dwtjcpszy/image/upload/v1745587564/featurde-esim-solutions_z5m53r.jpg",
  },
  {
    title: "5G",
    description:
      "Our solutions enable seamless integration of private and public networks with advanced interoperable technology and secure OTA management for remote SIM updates.",
    buttonName: "Private Networks",
    secondaryButtonName: "OTA Suite",
    color: "#fa9b26",
    image:
      "https://res.cloudinary.com/dwtjcpszy/image/upload/v1745587568/featured-5g_ekoh7n.jpg",
  },
  {
    title: "Integrated SE",
    description:
      "Integrated security and seamless connectivity are at the core of our iSE and iSIM solutions, designed for advanced mobile and IoT applications.",
    buttonName: "iSE",
    secondaryButtonName: "iSIM",
    color: "#ff6359",
    image:
      "https://res.cloudinary.com/dwtjcpszy/image/upload/v1745587565/featured-integrated-se_vqbw30.jpg",
  },
  {
    title: "IoT",
    broken: "Connectivity",
    description:
      "Seamlessly connect and secure your IoT ecosystem with scalable, interoperable solutions designed to drive innovation and enable future-proof connectivity.",
    buttonName: "IoT  Connectivity",
    secondaryButtonName: "",
    color: "#5c9cff",
    image:
      "https://res.cloudinary.com/dwtjcpszy/image/upload/v1745587565/featured-iot-connectivity_z38qy8.jpg",
  },
];

const ColorCardData: ColorCardProps[] = [
  {
    topText: "White Papers",
    title: "Optimizing eSIM Adoption: Adoption Interoperability",
    color: "#131bff",
  },
  {
    topText: "PRS",
    title:
      "CATEL Selects Valid’s Quarter-Size SIM Cards solution: A Step Towards Innovation and Sustainability",
    color: "#182799",
  },
];

const FooterLinks: FooterProps[] = [
  {
    mainTitle: "Insights",
    arr: [
      {
        title: "Events",
        links: "/",
      },
      {
        title: "Webinars",
        links: "/",
      },
      {
        title: "Brochures",
        links: "/",
      },
      {
        title: "PRs",
        links: "/",
      },
      {
        title: "Whitepapers",
        links: "/",
      },
      {
        title: "Articles",
        links: "/",
      },
    ],
  },
  {
    mainTitle: "Solutions",
    arr: [
      {
        title: "SIMs",
        links: "/",
      },
      {
        title: "eSIMs",
        links: "/",
      },
      {
        title: "eSIM Interoperability",
        links: "/",
      },
      {
        title: "Remote SIM Provisioning",
        links: "/",
      },
      {
        title: "eSIM Onboarding Journeys",
        links: "/",
      },
      {
        title: "Private Networks",
        links: "/",
      },
      {
        title: "OTA Suite",
        links: "/",
      },
      {
        title: "iSE",
        links: "/",
      },
      {
        title: "iSIM",
        links: "/",
      },
      {
        title: "IoT Connectivity",
        links: "/",
      },
    ],
  },
  {
    mainTitle: "About",
    arr: [
      {
        title: "About",
        links: "/",
      },
      {
        title: "Careers",
        links: "/",
      },
    ],
  },
];

export { CardData, ColorCardData, FooterLinks };
