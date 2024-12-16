"use client";
import Image from "next/image";
const caseStudies = [
  {
    id: "caseStudy1",
    title: "VLCC Personal Care",
    description: "Development of a new web store that showcases not only the latest products but informative blog and dynamic services.",
    categories: ["UX", "Web Store", "Development"],
    image: "caseStudy/card01.svg",
  },
  {
    id: "caseStudy2",
    title: "Medimix Ayurveda",
    description: "Redeveloped the website for Medimix and optimized it for higher AOV, better brand visibility and visual clarity.",
    categories: ["UX", "Higher AOV", "Optimization"],
    image: "caseStudy/card02.svg",
  },
  {
    id: "caseStudy3",
    title: "SECUREINTELI",
    description: "Lectus congue pharetra id imperdiet arcu tristique dui. Molestie velit at temurus. Nunc commodo congue eu leo id nullam augue. Sit ut ilisi. Mi velit.",
    categories: ["UX", "Redesign", "Web Development"],
    image: "caseStudy/card03.svg",
  },
  {
    id: "caseStudy4",
    title: "MESON VALVES INDIA",
    description: "Created an efficient website for a leading hardware material and ship valves provider, with their keywords reaching top spots.",
    categories: ["UX", "e-Commerce", "SEO"],
    image: "caseStudy/card04.svg",
  },
  // More case studies...
];
import { useState } from "react";
import CaseStudyCard from "../../_components/caseStudyCard";
import LetsCollab from "../../_components/letsCollab";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/AnimatedButton";
import { Separator } from "@/components/ui/separator";

const categories = [
  "All",
  "UI/UX Design",
  "Brand Identity",
  "Development",
  "Product",
];

const CaseStudiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCaseStudies, setVisibleCaseStudies] = useState(4);

  const filteredCaseStudies = caseStudies.filter(
    (caseStudy) =>
      selectedCategory === "All" ||
      caseStudy.categories.includes(selectedCategory)
  );

  const handleLoadMore = () => {
    setVisibleCaseStudies((prev) => prev + 4);
  };

  return (
    <div className="px-[30px] md:px-20">
      <div className="flex gap-4 items-center pt-14 mb-5">
        <Image src={"/vectors/Union.svg"} alt="" height={20} width={20} />
        <h2 className="text-[22px] text-center md:text-xl 3xl:text-[42px] text-[#525252] font-normal">{"Case Studies"}</h2>
      </div>
      <div className="flex justify-left mt-6 lg:mt-12 3xl:mt-20">
        {categories.map((category) => (
          <button
            key={category}
            className={`p-1 sm:p-2 border-b border-[#525252] ${
              selectedCategory === category
                ? "text-white me-4 sm:me-10 xl:me-14 text-lg md:text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-6xl font-bold text-[black]"
                : "text-gray-700 text-xs border-b-[.5px] lg:text-xl 4xl:text-3xl sm:pe-5 xl:pe-12 "
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 pb-14 justify-center">
        {filteredCaseStudies
          .slice(0, visibleCaseStudies)
          .map((caseStudy, index) => (
            <div className="border-b-[.5px] border-[#525252]" key={index}>
              <div
                className={cn(index % 2 === 0 && "sm:border-r-[.5px] rounded border-[#525252]")}
              >
                <CaseStudyCard
                  {...caseStudy}
                  className="!h-full"
                />
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center 4xl:py-14">
        <AnimatedButton >
          Load More
        </AnimatedButton>
      </div>
      <LetsCollab
        title={"Got A Project!"}
        substring={
          "We’re a team of passionate professionals driven by innovative ideas, dedicated to helping businesses build exceptional digital identities through expert web development, UI/UX design, eCommerce solutions, branding, marketing, ai services and beyond."
        }
        className="4xl:py-14"
      />
       <Separator className='h-px w-full bg-[#525252] mt-14 mx-auto' />
    </div>
  );
};

export default CaseStudiesPage;
