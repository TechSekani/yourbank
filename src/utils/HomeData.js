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
        cardText: "Saving for the Future",
      },
      {
        icon: BuildingLibraryIcon,
        cardText: "Homeownership",
      },
      {
        icon: BookOpenIcon,
        cardText: "Education Funding",
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
    style: " md:flex-row-reverse",
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
        number: "45%",
        description: "Streamline payroll processing",
      },
    ],
  },
];

//DATA for Ourfeatures component
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

//FAQs
export const FAQs = [
  {
    id: 1,
    question: `How do I open an account with YourBank?`,
    answer:
      'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },
  {
    id: 2,
    question: `What documents do I need to provide to apply for a loan?`,
    answer: `The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.`,
  },
  {
    id: 3,
    question: `How can I access my accounts online?`,
    answer: `Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.`,
  },
  {
    id: 4,
    question: `Are my transactions and personal information secure?`,
    answer: `At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.`,
  },
  {
    id: 5,
    question: `How do I open an account with YourBank?`,
    answer:
      'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },
  {
    id: 6,
    question: `What documents do I need to provide to apply for a loan?`,
    answer: `The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.`,
  },
  {
    id: 7,
    question: `How can I access my accounts online?`,
    answer: `Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.`,
  },
  {
    id: 8,
    question: `Are my transactions and personal information secure?`,
    answer: `At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.`,
  },
];
