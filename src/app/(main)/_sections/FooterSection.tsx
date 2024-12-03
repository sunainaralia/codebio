import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialButton } from "../_components/navigationbar";
import Lottie from "lottie-react";
import LottieAnimation from "../_components/lottiePlayer";

const socials = [
  {
    title: "LinkedIn",
    darkIcon: "/icons/linkdin-social-icon.svg",
    lightIcon: "/icons/linkdin-social-icon.svg",
    link: "https://www.linkedin.com/company/codebiosis-private-limited/?originalSubdomain=in",
  },
  {
    title: "Instagram",
    darkIcon: "/icons/insta-social-icon.svg",
    lightIcon: "/icons/insta-social-icon.svg",
    link: "https://www.instagram.com/codebiosis/",
  },
  {
    title: "Facebook",
    darkIcon: "/icons/fb-social-icon.svg",
    lightIcon: "/icons/fb-social-icon.svg",
    link: "https://www.facebook.com/codebiosispvtltd",
  },
  {
    title: "be",
    darkIcon: "/icons/be-social-icon.svg",
    lightIcon: "/icons/be-social-icon.svg",
    link: "https://www.instagram.com/codebiosis/",
  },
  {
    title: "web browser",
    darkIcon: "/icons/web-browser-icon.svg",
    lightIcon: "/icons/web-browser-icon.svg",
    link: "https://www.facebook.com/codebiosispvtltd",
  },
];

const handleSocialClick = (url: string | URL | undefined) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function Footer() {
  const currentyear=new Date().getFullYear();
  return (
    <div className=" mt-7 sm:mt-[37px] px-[30px] md:px-0 pb-[164px] 4xl:pb-48">
      <div className="block md:flex justify-between md:pb-5 border-b border-[#D8D8D8]">
        <div>
          <LottieAnimation
            animationData={require("@/../public/lottiee/HomePage/Footer.json")}
            className="hidden md:block max-h-[200px] lg:max-h-[300px] max-w-[200px] lg:max-w-[250px] 4xl:max-h-[338px] 4xl:max-w-[553px]"
          />

          <div className="hidden md:flex flex-wrap gap-x-[20px] gap-y-[10px] 4xl:gap-x-[60px] 4xl:gap-y-[30px] mt-4 4xl:mt-[90px] mb-4 4xl:mb-[87px] w-full max-w-[400px] lg:max-w-[600px] xl:max-w-[700px]">
            <Link className="text-lg lg:text-xl 4xl:text-3xl" href={"/services"}>
              What We Offer
            </Link>
            <Link className="text-lg lg:text-xl 4xl:text-3xl" href={"/our-work"}>
              Our Work
            </Link>
            <Link className="text-lg lg:text-xl 4xl:text-3xl" href={"/about-us"}>
              Who We Are
            </Link>
            <Link className="text-lg lg:text-xl 4xl:text-3xl" href={"/blog"}>
              Resources
            </Link>
            <Link className="text-lg lg:text-xl 4xl:text-3xl" href={"/case-study"}>
              Case Studies
            </Link>
            <Link className="text-lg lg:text-xl 4xl:text-3xl" href={"/contact-us"}>
              Meet Us
            </Link>
            <Link className="text-lg lg:text-xl 4xl:text-3xl" href={"/careers"}>
              Careers
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:items-end ">
          <div className="flex gap-4  justify-between md:justify-start items-start md:items-center ">
            <Image
              src={"/vectors/Union.svg"}
              alt=""
              height={60}
              width={60}
              className="hidden md:block h-[30px] w-[30px] 4xl:w-[60px] 4xl:h-[60px]"
            />
            <h3 className="text-3xl sm:text-5xl 4xl:text-[80px] font-[900] relative after:absolute after:w-full after:bg-black after:border-2 after:border-black after:left-0 after:-bottom-[20%] after:-translate-y-1/2 md:after:static md:after:border-none">
              Let&apos;s Talk
            </h3>
            <div className="md:hidden flex gap-5 mb-6 w-[135px] justify-end  flex-wrap">
              <SocialButton
                title={"Facebook"}
                lightIcon={"/icons/fb-social-icon.svg"}
                onClick={() =>
                  handleSocialClick("https://www.facebook.com/codebiosispvtltd")
                }
              />
              <SocialButton
                title={"LinkedIn"}
                lightIcon={"/icons/linkdin-social-icon.svg"}
                onClick={() =>
                  handleSocialClick(
                    "https://www.linkedin.com/company/codebiosis-private-limited/?originalSubdomain=in"
                  )
                }
              />
              <SocialButton
                title={"Instagram"}
                lightIcon={"/icons/insta-social-icon.svg"}
                onClick={() =>
                  handleSocialClick("https://www.instagram.com/codebiosis/")
                }
              />
              <SocialButton
                title={"be"}
                lightIcon={"/icons/be-social-icon.svg"}
                onClick={() =>
                  handleSocialClick("https://www.instagram.com/codebiosis/")
                }
              />
              <SocialButton
                title={"web browser"}
                lightIcon={"/icons/web-browser-icon.svg"}
                onClick={() =>
                  handleSocialClick("https://www.instagram.com/codebiosis/")
                }
              />
            </div>

            {/* <div className="md:hidden flex gap-4 my-5">
              {socials.map((social, index) => (
                <SocialButton
                  key={index}
                  title={social.title}
                  lightIcon={social.lightIcon}
                  onClick={() => handleSocialClick(social.link)}
                />
              ))}
            </div> */}
          </div>
          <div className="hidden md:flex  pb-3 4xl:pb-[50px] text-lg xl:text-xl 4xl:text-3xl font-medium ">
            North India • South India  • USA
          </div>
          <div className="hidden md:block pb-3 4xl:pb-[25px] text-lg xl:text-xl 4xl:text-3xl font-medium">
            +91 6307 080 414
          </div>
          <div className="hidden md:block text-lg xl:text-xl 4xl:text-3xl font-medium">
            sales@codebiosis.com
          </div>
          {/* <div className='hidden md:flex gap-4 my-5'>
            <SocialButton
              title={'Facebook'}
              lightIcon={'/icons/Facebook.svg'}
              onClick={() => {}}
            />
            <SocialButton
              title={'LinkedIn'}
              lightIcon={'/icons/LinkedIn.svg'}
              onClick={() => {}}
            />
            <SocialButton
              title={'Instagram'}
              lightIcon={'/icons/Instagram.svg'}
              onClick={() => {}}
            />
          </div> */}

          <div className="hidden md:flex gap-4 my-4 4xl:my-10">
            {socials.map((social, index) => (
              <SocialButton
                key={index}
                title={social.title}
                darkIcon={social.darkIcon}
                onClick={() => handleSocialClick(social.link)}
              />
            ))}
          </div>

          <div className="flex gap-[20px] md:gap-4 2xl:gap-8 items-center justify-center lg:justify-start 4xl:pt-14">
            <Image
              src={"/partners/shopify-plus-partner.svg"}
              alt=""
              height={50}
              width={100}
              className="xl:w-[150px] 4xl:w-[202px]"
            />
            <Image
              src={"/partners/adobe_solution_partner.svg"}
              alt=""
              height={50}
              width={100}
              className="xl:w-[150px] 4xl:w-[202px]"
            />
            <Image
              src={"/partners/zoho_partner.svg"}
              alt=""
              height={50}
              width={100}
              className="xl:w-[150px] 4xl:w-[202px]"
            />
          </div>

          <div className="md:hidden flex justify-between mt-10 mb-5 items-center">
            <Link
              href={"/terms-condition"}
              className="text-[13px]  lg:text-lg xl:text-xl 4xl:text-3xl font-medium"
            >
              Terms & Conditions
            </Link>
            <Separator
              className="w-px bg-[#D8D8D8] mx-1 sm:mx-6"
              orientation="vertical"
              style={{
                height: "18px",
                width: "2px",
                backgroundColor: "rgba(43, 43, 43, 1)",
              }}
            />
            <Link
              href={"/privacy-policy"}
              className="text-[13px]  lg:text-lg xl:text-xl 4xl:text-3xl font-medium"
            >
              Privacy & Cookie Policy
            </Link>
            <Separator
              className="w-px bg-[#D8D8D8] mx-1 sm:mx-6"
              orientation="vertical"
              style={{
                height: "18px",
                width: "2px",
                backgroundColor: "rgba(43, 43, 43, 1)",
              }}
            />
            <div className="text-[13px]  lg:text-lg xl:text-xl 4xl:text-3xl font-medium">Sitemap</div>
          </div>
        </div>
      </div>

      <div className="flex py-4 w-full justify-center md:justify-between">
        <div className="text-[#8D8D8D] text-sm lg:text-xl 4xl:text-3xl font-medium ">
          © {currentyear}, CodeBiosis Private Limited.
        </div>

        <div className="hidden md:flex">
          <Link
            href={"/terms-condition"}
            className="text-[13px]  lg:text-lg xl:text-xl 4xl:text-3xl font-medium"
          >
            Terms & Condtions
          </Link>
          <Separator
            className="w-px bg-[#D8D8D8] mx-2 xl:mx-6"
            orientation="vertical"
            style={{ backgroundColor: "rgba(43, 43, 43, 1)" }}
          />
          <Link
            href={"/privacy-policy"}
            className="text-[13px]  lg:text-lg xl:text-xl 4xl:text-3xl font-medium"
          >
            Privacy & Cookie Policy
          </Link>
          <Separator
            className="w-px bg-[#D8D8D8] mx-2 xl:mx-6"
            orientation="vertical"
            style={{ backgroundColor: "rgba(43, 43, 43, 1)" }}
          />
          <div className="text-[13px]  lg:text-lg xl:text-xl 4xl:text-3xl font-medium">Sitemap</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
