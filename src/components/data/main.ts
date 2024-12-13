import { axisBank, kotakBank, Medimix, ourWorkAlmondImg, Pepr, Secureinteli, Talitha, tataSonet, VLCC } from "./images";

export interface WorkCardProps {
    img: string;
    id: string;
    name?: string;
    description?: string;
    cardstyling?: string;
    strategy?: string;
    design?: string;
    mainDescription?: string;
    imageArr?: string[];
  }
export const works : WorkCardProps[] = [
   
    {
      img: "/ourWork/work-01.svg",
      id: "works1",
      name: "Almond House",
      description: "Food & Confectionery",
      strategy: "Local SEO Focus, CRM Integration",
      design: "UI/UX, Backend Optimization",
      imageArr:ourWorkAlmondImg,
      cardstyling:"bg-[#E46C38]",
      mainDescription:'We redesigned their website with an engaging UI/UX and implemented backend optimizations to improve speed and user experience.'
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works2",
      name: "Medimix",
      imageArr: Medimix,
      description: "Ayurvedic Health & Wellness",
      strategy: "SEO Strategy, Social Media Campaigns",
      cardstyling:"bg-[#DEF4E6]",
      design: "Blended UI/UX, eCommerce Platform",
      mainDescription: `We built an eCommerce platform that reflects their brand heritage and enhances user experience and streamlined their UI/UX to improve client interaction.`
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works3",
      name: "VLCC",
      imageArr: VLCC,
      description: "Food & Confectionery",
      strategy: "Shopping Integration, CRM",
      cardstyling:"bg-[#F6CAA0]",
      design: "UI/UX, eCommerce Features",
      mainDescription: `We overhauled their site with a luxurious UI/UX design and implemented eCommerce features to boost engagement and conversions.`
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works4",
      name: "Pepr",
      imageArr: Pepr,
      description: "Athleisure & Fashion",
      strategy: "ROAS Optimizations, Custom API",
      cardstyling:"bg-[#CCB9A7]",
      design: "Modern UI/UX, Mobile Responsive",
      mainDescription: `We designed a visually dynamic website with a modern UI/UX that resonated with Pepr’s active lifestyle brand. Performance optimizations were made to improve speed and user experience, while custom APIs and CRM integrations helped streamline customer interactions.`
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works5",
      name: "Secureinteli",
      imageArr: Secureinteli,
      description: "Cybersecurity Solutions",
      strategy: "CRM Integration, SEO Optimization",
      cardstyling:"bg-[#EFBDAE]",
      design: "UI/UX, Optimization",
      mainDescription: `We were tasked with revamping their website to enhance both its security features and user experience. We integrated custom encryption protocols to strengthen data protection and streamlined their UI/UX to improve client interaction.`
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works6",
      name: "Talitha",
      imageArr: Talitha,
      description: "High-End Fashion",
      strategy: "Marketing Campaigns, CRM",
      cardstyling:"bg-[#F59494]",
      design: "Elegant UI/UX, Personalization",
      mainDescription: `We designed a sophisticated UI/UX and built a personalized shopping experience. Added a smooth integration to payment gateway and checkout.`
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works7",
      name: "Satgurus",
      imageArr: axisBank,
      description: "Spiritual & Religious Items",
      strategy: "Streamlined Navigation, SEO",
      cardstyling:"bg-[#76A506]",
      design: "UI/UX, Optimization",
      mainDescription: `We redesigned their website with an engaging UI/UX that matched their brand’s spiritual aura. Performance improvements were made to enhance mobile responsiveness and reduce load times. Additionally, CRM and ERP integration allowed for more efficient management of inventory and customer relations.`
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works8",
      name: "Lalande",
      imageArr: axisBank,
      description: "Legal Services",
      strategy: "SEO, Optimized Intake Flow",
      cardstyling:"bg-[#F0EBD9]",
      design: "UI/UX, Professional Aesthetic",
      mainDescription: `We designed a clean, authoritative UI/UX that instilled trust and showcased the firm’s expertise. Additionally, we implemented SEO strategies to boost their search engine rankings and increased visibility for potential clients searching for legal services online.`
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works9",
      name: "Kisah",
      imageArr: axisBank,
      description: "Ethnic Fashion",
      strategy: "Ethnic Aesthetic, Simplified User Flow ",
      cardstyling:"bg-[#E46C38]",
      design: "UI/UX Redesign, Optimization",
      mainDescription: `We built an eCommerce platform that reflects their brand heritage and enhances user experience and streamlined their UI/UX to improve client interaction.`
    },

  ];