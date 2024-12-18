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
    March_2021:string;
    Their_Problem:string;
    How_We_Solved_It:string;
    What_Client_Said:string;
    Design_img:string;
    Colorpalette_img:string;
    Font_img:string;
  }
export const works : WorkCardProps[] = [
   
    {
      img: "/ourWork/work-01.webp",
      Design_img: "/ourWork/almond_house_design.png",
      Colorpalette_img: "/ourWork/almond_color.png",
      Font_img:"/ourWork/almond_font.png",
      id: "work1",
      name: "Almond House",
      description: "Food & Confectionery",
      strategy: "Local SEO Focus, CRM Integration",
      design: "UI/UX, Backend Optimization",
      imageArr:ourWorkAlmondImg,
      cardstyling:"bg-[#E46C38]",
      mainDescription:'We redesigned their website with an engaging UI/UX and implemented backend optimizations to improve speed and user experience.',
      March_2021:"Almond House is a renowned name in the food and confectionery industry, known for its premium quality sweets and savory items, especially during festive seasons.",
      Their_Problem:"Almond House’s website was outdated and faced challenges with slow speed and low order volumes. Their site lacked modern design and aesthetic hinting at the heritage",
    How_We_Solved_It:"The new design made the website 40% faster, which improved user experience and contributed to a 50% increase in organic traffic. Integrating Zoho CRM and ERP systems helped streamline order management and customer service, boosting efficiency during peak seasons.", 
    What_Client_Said:"CodeBiosis transformed our digital presence with an intuitive, secure, and high-performing website. Our clients love the new interface, and we've seen a remarkable increase in client inquiries",
    },
    {
      img: "/ourWork/work-02.webp",
      Design_img: "/ourWork/medimix_design.png",
      Colorpalette_img:"/ourWork/medimix_color.png",
      Font_img:"/ourWork/medimix_font.png",
      id: "Medimix",
      name: "Medimix",
      imageArr: Medimix,
      description: "Ayurvedic Health & Wellness",
      strategy: "SEO Strategy, Social Media Campaigns",
      cardstyling:"bg-[#DEF4E6]",
      design: "Blended UI/UX, eCommerce Platform",
      mainDescription: `We built an eCommerce platform that reflects their brand heritage and enhances user experience and streamlined their UI/UX to improve client interaction.`,
      March_2021:"Medimix is a trusted name in Ayurvedic skincare and wellness products, blending traditional Ayurvedic practices with modern science.",
      Their_Problem:"Medimix needed a site that blended traditional Ayurvedic values with modern digital functionality. Additionally they wanted a modern and light weight aesthetic.",
    How_We_Solved_It:"We grew organic traffic by 45% and sales by 30% with targeted SEO and social media efforts. CRM & ERP integration streamlined operations and customer relations.",
    What_Client_Said:"CodeBiosis transformed our digital presence with an intuitive, secure, and high-performing website. Our clients love the new interface, and we've seen a remarkable increase in client inquiries",
    },
    {
      img: "/ourWork/work-03.webp",
      Design_img: "/ourWork/vlcc_design.png",
      Colorpalette_img:"/ourWork/vlcc_color.png",
      Font_img:"/ourWork/vlcc_font.png",
      id: "VLCC",
      name: "VLCC",
      imageArr: VLCC,
      description: "Food & Confectionery",
      strategy: "Shopping Integration, CRM",
      cardstyling:"bg-[#F6CAA0]",
      design: "UI/UX, eCommerce Features",
      mainDescription: `We overhauled their site with a luxurious UI/UX design and implemented eCommerce features to boost engagement and conversions.`,
      March_2021:"VLCC is a leader in the beauty and wellness industry, offering a wide range of products and services aimed at enhancing personal beauty and health.",
      Their_Problem:"VLCC’s online store had several performance issues, resulting in low conversions and poor user engagement.",
    How_We_Solved_It:"We provided custom-built eCommerce features that increased user retention and AOV by 25%. SEO strategies helped grow organic traffic by 60%, leading to higher conversions and better customer engagement. HubSpot integration enhanced customer data management and marketing efforts.",
    What_Client_Said:"CodeBiosis transformed our digital presence with an intuitive, secure, and high-performing website. Our clients love the new interface, and we've seen a remarkable increase in client inquiries",
    },
    {
      img: "/ourWork/work-04.webp",
      Design_img: "/ourWork/pepr_design.png",
      Colorpalette_img:"/ourWork/pepr_color.png",
      Font_img:"/ourWork/pepr_font.png",
      id: "Pepr",
      name: "Pepr",
      imageArr: Pepr,
      description: "Athleisure & Fashion",
      strategy: "ROAS Optimizations, Custom API",
      cardstyling:"bg-[#CCB9A7]",
      design: "Modern UI/UX, Mobile Responsive",
      mainDescription: `We designed a visually dynamic website with a modern UI/UX that resonated with Pepr’s active lifestyle brand. Performance optimizations were made to improve speed and user experience, while custom APIs and CRM integrations helped streamline customer interactions.`,
      March_2021:"Pepr is a rising athleisure brand known for offering modern, stylish, and performance-focused activewear, catering to individuals with active, health-conscious lifestyles.",
      Their_Problem:"Pepr faced challenges with low return on ad spend (ROAS) and slow website speed, which led to poor customer engagement and a lower conversion rate. They needed a fast, high-performing website to keep up with growing demand.",
    How_We_Solved_It:"Our performance optimizations increased site speed by 40%, leading to a noticeable improvement in customer experience. Through targeted digital marketing efforts centered on fitness and fashion trends, Pepr saw a 40% increase in organic traffic. Custom API and CRM integrations helped streamline operations and boost customer retention, resulting in a 25% sales growth within the first quarter.",
    What_Client_Said:"The team at CodeBiosis exceeded our expectations. Our online sales have surged, and the new website perfectly captures our brand ethos.",
    },
    {
      img: "/ourWork/work-05.webp",
      Design_img: "/ourWork/Secureinteli_design.png",
      Colorpalette_img:"/ourWork/Secureinteli_color.png",
      Font_img:"/ourWork/Secureinteli_font.png",
      id: "Secureinteli",
      name: "Secureinteli",
      imageArr: Secureinteli,
      description: "Cybersecurity Solutions",
      strategy: "CRM Integration, SEO Optimization",
      cardstyling:"bg-[#4F7CBF]",
      design: "UI/UX, Optimization",
      mainDescription: `We were tasked with revamping their website to enhance both its security features and user experience. We integrated custom encryption protocols to strengthen data protection and streamlined their UI/UX to improve client interaction.`,
      March_2021:"Secure Inteli provides top-tier cybersecurity solutions, specializing in encryption protocols and secure network architecture for businesses of all sizes. Their focus is on safeguarding critical data while enhancing overall system performance.",
      Their_Problem:"Secure Inteli struggled with a slow, underperforming website that wasn’t converting leads effectively. Their site lacked modern design and the security features necessary to attract high-value clients in the cybersecurity sector.",
   How_We_Solved_It:"By combining robust security measures with a user-friendly interface, we helped Secure Inteli not only enhance the protection of their digital assets but also improve their client interaction and inquiry rates. With the integration of Zoho CRM, their client management became more efficient, while targeted SEO increased visibility, leading to a 35% rise in client inquiries.",
   What_Client_Said:"CodeBiosis transformed our digital presence with an intuitive, secure, and high-performing website. Our clients love the new interface, and we've seen a remarkable increase in client inquiries",
    },
    {
      img: "/ourWork/work-05.webp",
      Design_img: "/ourWork/Talitha_design.png",
      Colorpalette_img:"/ourWork/Talitha_color.png",
      Font_img:"/ourWork/Talitha_font.png",
      id: "Talitha",
      name: "Talitha",
      imageArr: Talitha,
      description: "High-End Fashion",
      strategy: "Marketing Campaigns, CRM",
      cardstyling:"bg-[#F59494]",
      design: "Elegant UI/UX, Personalization",
      mainDescription: `We designed a sophisticated UI/UX and built a personalized shopping experience. Added a smooth integration to payment gateway and checkout.`,
      March_2021:"Talitha is a luxury fashion brand known for its high-quality and exclusive collections aimed at a discerning clientele.",
      Their_Problem:"Talitha needed a website that aligned with their luxury fashion image while addressing performance issues and low AOV.",
    How_We_Solved_It:"We enhanced user engagement and increased AOV by 30%, while targeted marketing efforts led to a 50% rise in conversion rates. HubSpot CRM improved high-end customer management.",
    What_Client_Said:"CodeBiosis transformed our digital presence with an intuitive, secure, and high-performing website. Our clients love the new interface, and we've seen a remarkable increase in client inquiries",
    },
    {
      img: "/ourWork/work-02.svg",
      Design_img: "",
      Colorpalette_img:"",
      Font_img:"",
      id: "Satgurus",
      name: "Satgurus",
      imageArr: axisBank,
      description: "Spiritual & Religious Items",
      strategy: "Streamlined Navigation, SEO",
      cardstyling:"bg-[#76A506]",
      design: "UI/UX, Optimization",
      mainDescription: `We redesigned their website with an engaging UI/UX that matched their brand’s spiritual aura. Performance improvements were made to enhance mobile responsiveness and reduce load times. Additionally, CRM and ERP integration allowed for more efficient management of inventory and customer relations.`,
      March_2021:"",
      Their_Problem:"",
    How_We_Solved_It:"",
    What_Client_Said:"",
    },
    {
      img: "/ourWork/work-02.svg",
      Design_img: "",
      Colorpalette_img:"",
      Font_img:"",
      id: "Lalande",
      name: "Lalande",
      imageArr: axisBank,
      description: "Legal Services",
      strategy: "SEO, Optimized Intake Flow",
      cardstyling:"bg-[#F0EBD9]",
      design: "UI/UX, Professional Aesthetic",
      mainDescription: `We designed a clean, authoritative UI/UX that instilled trust and showcased the firm’s expertise. Additionally, we implemented SEO strategies to boost their search engine rankings and increased visibility for potential clients searching for legal services online.`,
      March_2021:"",
      Their_Problem:"",
    How_We_Solved_It:"",
    What_Client_Said:"",
    },


  ];