/* eslint-disable react/no-unescaped-entities */
"use client";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import LetsCollab from "@/app/(main)/_components/letsCollab";
import CaseStudySection from "@/app/(main)/_sections/caseStudySection";
import { Separator } from "@radix-ui/react-separator";
import CardsCarousel from "@/app/(main)/_components/cardsCarousel";
import CaseStudyCard from "@/app/(main)/_components/caseStudyCard";
import LottieAnimation from "@/app/(main)/_components/lottiePlayer";

const CaseStudyDetail = () => {
  const data = [
    {
      id: "caseStudy1",
      title: "SECUREINTELI",
      description: "Lectus congue pharetra id imperdiet arcu tristique dui...",
      image: "/caseStudy/card1.svg",
      categories: ["UX", "Redesign", "Web Development"],
    },
    {
      id: "caseStudy2",
      title: "MESON VALVES INDIA",
      description:
        "Created an efficient website for a leading hardware material...",
      image: "/caseStudy/card2.svg",
      categories: ["UX", "e-Commerce", "SEO"],
    },
    {
      id: "caseStudy3",
      title: "NEW CARDS",
      description:
        "Created an efficient website for a leading hardware material...",
      image: "/caseStudy/card1.svg",
      categories: ["UX", "e-Commerce", "SEO"],
    },

    // More cards...
  ];

  const cardsArray: React.JSX.Element[] = [];

  data.map((card) => {
    cardsArray.push(<CaseStudyCard key={card.id} {...card} />);
  });

  // Define items for Approach section
  const approachItems = [
    {
      heading: "Brand Discovery :",
      description:
        "Conducted in-depth research to understand Tata Sonnets' brand essence, values, and target audience. Analyzed competitor strategies and industry trends to identify opportunities for differentiation.",
    },
    {
      heading: "Strategy Development :",
      description:
        "Developed a comprehensive brand strategy focusing on storytelling, emotional connection, and experiential marketing. Defined key messaging pillars and brand narratives to resonate with the target audience.",
    },
    {
      heading: "Web Design & Development :",
      description:
        "Collaborated with Tata Sonnets' team to translate the brand strategy into a visually stunning website. Implemented responsive design principles for seamless user experience across devices. Prioritized intuitive navigation, striking visuals, and persuasive copywriting to engage visitors and drive conversions.",
    },
    {
      heading: "Content Strategy :",
      description:
        "Developed engaging content that tells the story of Tata Sonnets' products and heritage, fostering a deeper connection with the audience. Focused on creating high-quality visuals, compelling narratives, and informative product descriptions",
    },
    {
      heading: "SEO & Digital Marketing :",
      description:
        "Implemented search engine optimization (SEO) best practice to improve the website's visibility and organic traffic. Developed a digital marketing strategy encompassing social media, email marketing, and influencer partnership to expand Tata Sonnets' online reach and foster community engagement.",
    },
    // Add more items as needed
  ];

  // Define items for Result section
  const resultItems = [
    {
      heading: "Elevated Brand Presence",
      description:
        "The redesign design reflects Tata Sonnects' Brands identity and values, reinforcing its position as a premium luxury brand in the home fragrance industry.",
    },
    {
      heading: "Increase Engagement & Conversion :",
      description:
        "User engagement metrics, including time spent on site and page view, have significantly improved, indicating a high level of interest and interaction with Tata Sonnets' content. Conversion rates have also increased, resulting in a tangible impact on sales and revenue.",
    },
    {
      heading: "Positive Customer Feedback :",
      description:
        "Customer feedback has been overwhelming positive ,with user praising the website'aesthetic ,usability and informative content .The semaless onlineshopping experince has enhance customer statisfaction and loyality",
    },
    {
      heading: "Enhanced Brand Equality :",
      description:
        "Tata Sonnets' enhnaced online presence and  cohesive brand messaging have strengthened its brand equality and resonance with the target audience.The brand is now positioned for sustained growth and success in the competitive luxury home fragnance market",
    },
    // Add more items as needed
  ];

  return (
    <div className="relative px-[30px] md:px-20">
      <div
        className="mx-auto mt-10 w-full bg-cover bg-center flex items-center justify-center h-[50vh] md:h-[70vh]"
        style={{
          backgroundImage: `url('/caseStudy/bannerOne.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      ></div>
      <div className="pt-8 md:pt-14 pb-10 md:pb-14 lg:pt-24 3xl:pb-[175px]">
        {/* Title and Industry */}
        <div className="flex flex-col md:flex-row justify-between gap-5 lg:gap-10 items-start mb-10">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-6xl font-bold text-black">
              TATA Sonnets
            </h1>{" "}
            <div className="text-xl mt-2 md:mt-5 flex flex-col gap-1 md:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[26px] 4xl:text-4xl 4xl:leading-[48px] text-[#525252] font-bold ">
                Industry:
              </span>

              <span
                className="text-[15px] md:text-base 2xl:text-2xl"
                style={{ color: "#525252" }}
              >
                Coffee, eCommerce
              </span>
            </div>
            <div className="text-xl md:pt-0.5 mt-5 md:mt-12 flex flex-col gap-1 md:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[26px] 4xl:text-4xl 4xl:leading-[48px] text-[#525252] font-bold ">
                What We Did:
              </span>

              <span
                className="text-[15px] md:text-base 2xl:text-2xl"
                style={{ color: "#525252" }}
              >
                Brand Strategy, UX Strategy, Art Direction, UI/UX
              </span>
            </div>
          </div>
          {/* Overview */}
          <div className="flex-1 lg:ml-10">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] 4xl:text-4xl 4xl:leading-[48px] text-[#525252] font-bold ">
              Overview:
            </h2>
            <p className="text-[#525252] text-[15px] md:text-base 3xl:text-2xl 3xl:leading-[40px] lg:leading-[26px] leading-[21px] 2xl:max-w-[900px] mt-2 md:mt-5">
              Tata Sonnets is a premium brand under the Tata Group, specializing
              in luxury home fragrances. With a commitment to quality and
              innovation, Tata Sonnets offers a range of exquisite scents
              crafted to elevate everyday experiences. As the market for luxury
              home fragrances grows, Tata Sonnets aims to solidify its position
              as a leader in the industry through a comprehensive web redesign
              and brand strategy overhaul.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mx-auto w-full bg-contain bg-no-repeat flex items-center justify-center h-[50vh] md:h-[80vh]"
        style={{
          backgroundImage: `url('/caseStudy/yemigundi-img.png')`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div className="flex flex-col md:flex-row xl:mt-20 gap-3 md:gap-10">
        <div
          className="mx-auto w-full bg-contain bg-no-repeat flex items-center justify-center h-[200px] md:h-[40vh]"
          style={{
            backgroundImage: `url('/caseStudy/yemigundi-img2.png')`,
            backgroundSize: "100% 100%",
            // height: "100%",
          }}
        ></div>
        <div
          className="mx-auto w-full bg-contain bg-no-repeat flex items-center justify-center h-[200px] md:h-[40vh]"
          style={{
            backgroundImage: `url('/caseStudy/yemigundi-img3.png')`,
            backgroundSize: "100% 100%",
            // height: "100%",
          }}
        ></div>
      </div>
      {/* New Section - Statistics and Project Goals */}
      <div className="flex flex-col lg:flex-row gap-10 pb-20 lg:py-20 justify-between items-end ">
        {/* Statistics */}
        <div className="lg:flex-1 w-full">
          <div className="my-6">
            <h2 className="text-xl md:text-4xl lg:text-[30px] 4xl:text-5xl font-bold max-w-[890px] 4xl:!leading-[64px] lg:leading-[40px] text-black">
              19 Million
            </h2>
            <p
              className="text-[#525252] text-[15px] md:text-base 3xl:text-2xl 3xl:leading-[40px] lg:leading-[26px] leading-[21px] 2xl:max-w-[900px] mt-3"
              style={{ color: "#525252" }}
            >
              There are many variations of passages
            </p>
          </div>
          <div className="mb-6 my-8 xl:my-12 3xl:my-[70px]">
            <h2 className="text-xl md:text-4xl lg:text-[30px] 4xl:text-5xl font-bold max-w-[890px] 4xl:!leading-[64px]  lg:leading-[40px] text-black">
              75+
            </h2>
            <p
              className="text-[#525252] text-[15px] md:text-base 3xl:text-2xl 3xl:leading-[40px] lg:leading-[26px] leading-[21px] 2xl:max-w-[900px] mt-3"
              style={{ color: "#525252" }}
            >
              If you are going to use a passage
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl md:text-4xl lg:text-[30px] 4xl:text-5xl font-bold max-w-[890px] 4xl:!leading-[64px]  lg:leading-[40px] text-black">
              2% to 15.8%
            </h2>
            <p
              className="text-[#525252] text-[15px] md:text-base 3xl:text-2xl 3xl:leading-[40px] lg:leading-[26px] leading-[21px] 2xl:max-w-[900px] mt-3"
              style={{ color: "#525252" }}
            >
              Contrary to popular belief
            </p>
          </div>
        </div>
        {/* Project Goals */}
        <div className="flex-1 xl:max-w-[900px]">
          <div className="flex items-center md:mb-4">
            <LottieAnimation
              animationData={require("@/../public/lottiee/Case_Study/Mission.json")}
              className="max-w-12 max-h-12 mr-4"
            />
            <h2 className="text-xl md:text-4xl lg:text-[30px] 4xl:text-5xl font-bold max-w-[890px] 4xl:!leading-[64px] lg:leading-[40px] text-black">
              Project Goals :
            </h2>
          </div>
          <div className="mb-4 mt-4 xl:mt-12 3xl:mt-[60px]">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] 4xl:text-4xl 4xl:leading-[48px] text-[#525252] font-bold">
              Enhance Online Presence :
            </h3>
            <p
              className="text-[#525252] text-[15px] md:text-base 3xl:text-2xl 3xl:leading-[40px] lg:leading-[26px] leading-[21px] 2xl:max-w-[900px] mt-1 md:mt-3"
              style={{ color: "#525252" }}
            >
              Develop a modern, user-friendly website that reflects Tata
              Sonnets' brand identity and showcases its product range
              effectively.
            </p>
          </div>
          <div className="mb-4 mt-8 xl:mt-12 3xl:mt-[60px]">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] 4xl:text-4xl 4xl:leading-[48px] text-[#525252] font-bold">
              Brand Consistency :
            </h3>
            <p
              className="text-[#525252] text-[15px] md:text-base 3xl:text-2xl 3xl:leading-[40px] lg:leading-[26px] leading-[21px] 2xl:max-w-[900px]  mt-1 md:mt-3"
              style={{ color: "#525252" }}
            >
              Ensure consistency across all digital touchpoints to reinforce
              Tata Sonnets' brand identity and values.
            </p>
          </div>
          <div className="mb-4 mt-8 xl:mt-12 3xl:mt-[60px]">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] 4xl:text-4xl 4xl:leading-[48px] text-[#525252] font-bold">
              Drive Engagement & Conversion:
            </h3>
            <p
              className="text-[#525252] text-[15px] md:text-base 3xl:text-2xl 3xl:leading-[40px] lg:leading-[26px] leading-[21px] 2xl:max-w-[900px]  mt-1 md:mt-3"
              style={{ color: "#525252" }}
            >
              Increase user engagement and drive conversions through intuitive
              design, compelling content, and seamless user experience.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-cover bg-center flex items-center justify-center h-[50vh] md:h-[70vh] lg:mt-24 3xl:mt-[175px]"
        style={{
          backgroundImage: `url('/caseStudy/bannerThree.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* Approach Section */}
      <div className="pt-8 md:pt-14 ">
        <CaseStudySection
          title="Approach :"
          logoSrc={require("@/../public/lottiee/Case_Study/Approach.json")}
          altText="Approach Logo"
          items={approachItems}
        />
      </div>
      <div
        className="w-full bg-center flex items-center justify-center h-[15vh] sm:h-[30vh] lg:h-[50vh] xl:h-[60vh] 4xl:h-[70vh] mt-10 sm:mt-0"
        style={{
          backgroundImage: `url('/caseStudy/placeImg.svg')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
 
        }}
      ></div>
      {/* Result Section */}
      <div className="">
        <CaseStudySection
          title="Result :"
          logoSrc={require("@/../public/lottiee/Case_Study/Results.json")}
          altText="Result Logo"
          items={resultItems}
        />
      </div>
      {/* Conclusion Section */}
      <div className=" mx-auto m-20 xl:mt-[150px]">
        <h2 className="text-3xl xl:text-4xl 2xl:text-[48px] 4xl:text-[60px] font-bold text-center">
          Conclusion{" "}
        </h2>
        <Separator
          className="h-px w-28 mx-auto my-6 bg-[#8a8282]"
          orientation="horizontal"
        />
        <p className=" text-[#525252] text-[15px] md:text-xl 3xl:text-[30px] 3xl:leading-[40px] lg:leading-[26px] leading-[21px] text-center mt-5  lg:px-20">
          The Tata Sonnets web design and brand strategy project exemplifies the
          power of strategic thinking, creative execution, and collaboration in
          driving business success. By aligning the website with Tata Sonnets'
          brand identity and values, we have created a compelling digital
          experience that resonates with consumers and drives results. As Tata
          Sonnets continues to innovate and expand its product offerings, the
          foundation laid by this project will serve as a catalyst for future
          growth and differentiation in the market.
        </p>
      </div>
      <div className="pt-14">
        <CardsCarousel data={cardsArray} />
      </div>
      <LetsCollab
        title={"Got A Project!"}
        substring={
          "We’re a team of passionate professionals driven by innovative ideas, dedicated to helping businesses build exceptional digital identities through expert web development, UI/UX design, eCommerce solutions, branding, marketing, ai services and beyond."
        }
        className="pb-14 md:pt-16"
      />
    </div>
  );
};

export default CaseStudyDetail;
