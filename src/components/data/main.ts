import { axisBank, kotakBank, tataSonet } from "./images";

export interface WorkCardProps {
    img: string;
    id: string;
    name?: string;
    description?: string;
    strategy?: string;
    design?: string;
    mainDescription?: string;
    imageArr?: string[];
  }
export const works : WorkCardProps[] = [
   
    {
      img: "/ourWork/work-01.svg",
      id: "works2",
      name: "Medimix Ayurvedic",
      description: "E-commerce Store, Skincare",
      strategy: "Brand Strategy, UX Strategy",
      design: "UI/UX Design, Art Direction",
      imageArr:kotakBank,
      mainDescription:'We redesigned their website with an engaging UI/UX and implemented backend optimizations to improve speed and user experience.'
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works3",
      name: "VLCC Personal Care",
      imageArr: axisBank,
      description: "E-commerce Store, Skincare",
      strategy: "Brand, Development",
      design: "UI/UX Design",
      mainDescription: `We built an eCommerce platform that reflects their brand heritage and enhances user experience and streamlined their UI/UX to improve client interaction.`
    },
    {
      img: "/ourWork/work-03.svg",
      id: "works4",
      name: "TATA Sonnets",
      imageArr:tataSonet,
      description: "E-commerce Store, Skincare",
      strategy: "Optimization, Development",
      design: "UI/UX Design, Development",
      mainDescription:`We overhauled their site with a luxurious UI/UX design and implemented eCommerce features to boost engagement and conversions.`
    },
  ];