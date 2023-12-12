import {
  handsCurrency,
  moneyInHand,
  BanknotesIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  icon4,
  icon5,
} from "../assets/images";

export const USECASE = [
  {
    id: 1,
    title: "For Individuals",
    text: "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers",
    iconCard: [
      {
        icon: moneyInHand,
        cardText: "Managing Personal Finances",
      },
      {
        icon: handsCurrency,
        cardText: "Managing Personal Finances",
      },
      {
        icon: BuildingLibraryIcon,
        cardText: "Managing Personal Finances",
      },
      {
        icon: BookOpenIcon,
        cardText: "Managing Personal Finances",
      },
    ],
    percent: [
      {
        number: "78%",
        description: "Secure Retirement Planning",
      },
      {
        number: "63%",
        description: "Manageable Debt Consolidation",
      },
      {
        number: "91%",
        description: "Reducing financial burdens",
      },
    ],
  },
  {
    id: 2,
    title: "For Business",
    text: "For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
    style: " flex-row-reverse",
    iconCard: [
      {
        icon: BuildingOffice2Icon,
        cardText: "Startups and Entrepreneurs",
      },
      {
        icon: BanknotesIcon,
        cardText: "Cash Flow Management",
      },
      {
        icon: icon4,
        cardText: "Business Expansion",
      },
      {
        icon: icon5,
        cardText: "Payment Solutions",
      },
    ],
    percent: [
      {
        number: "65%",
        description: "Cash Flow Management",
      },
      {
        number: "70%",
        description: "Drive Business Expansion",
      },
      {
        number: "45%%",
        description: "Streamline payroll processing",
      },
    ],
  },
];


//for Ourfeatures component
export const FEATURES = [
  {
    id: 1,
    featureTitle: "Online Banking",
    card: [
      {
        title: "24/7 Account Access",
        text: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      },
      {
        title: "Mobile Banking App",
        text: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      },
      {
        title: "Secure Transactions",
        text: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
      },
      {
        title: "Bill Pay and Transfers",
        text: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
      },
    ],
  },
  {
    id: 2,
    featureTitle: "Financial Tools",
    card: [
      {
        title: "Mobile Banking App",
        text: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      },
      {
        title: "24/7 Account Access",
        text: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      },
      {
        title: "Secure Transactions",
        text: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
      },
      {
        title: "Bill Pay and Transfers",
        text: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
      },
    ],
  },
  {
    id: 3,
    featureTitle: "Customer Support",
    card: [
      {
        title: "Secure Transactions",
        text: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
      },
      {
        title: "Bill Pay and Transfers",
        text: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
      },
      {
        title: "24/7 Account Access",
        text: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      },
      {
        title: "Mobile Banking App",
        text: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      },
    ],
  },
];
