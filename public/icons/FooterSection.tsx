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
  return (
    <div className="sm:mt-[37px] px-[30px] md:px-0 pb-48">
      <div className="block md:flex justify-between md:pb-5 border-b border-[#D8D8D8] items-center">
        <div className="">
          <LottieAnimation
            animationData={require("@/../public/lottiee/HomePage/Footer.json")}
            className="hidden md:block max-h-[200px] lg:max-h-[300px] max-w-[200px] lg:max-w-[300px] 2xl:max-h-[338px] 2xl:max-w-[553px]"
          />

          <div className="hidden md:flex flex-wrap gap-x-[30px] gap-y-[10px] 2xl:gap-x-[60px] 2xl:gap-y-[30px] mt-4 2xl:mt-[90px] mb-4 2xl:mb-[87px] w-full max-w-[400px]">
            <Link href={"/services"}>What We Offer</Link>
            <Link href={"/our-work"}>Our Work</Link>
            <Link href={"/about-us"}>Who We Are</Link>
            <Link href={"/blog"}>Resources</Link>
            {/**            <Link href={'/case-study'}>Case Studies</Link> */}
            <Link href={"/contact-us"}>Meet Us</Link>
            <Link href={"/careers"}>Careers</Link>
          </div>
        </div>

        <div className="flex flex-col md:items-end ">
          <div className="flex gap-4 my-5 justify-between md:justify-start ">
            <Image
              src={"/vectors/Union.svg"}
              alt=""
              height={60}
              width={60}
              className="hidden md:block h-[30px] w-[30px] lg:w-[60px] lg:h-[60px]"
            />
            <h3 className="text-3xl xl:text-[80px] font-[900] relative after:absolute after:w-full after:bg-black after:border-2 after:border-black after:left-0 after:top-[40%] after:-translate-y-1/2 md:after:static md:after:border-none">
              Let&apos;s Talk
            </h3>
            <div className="md:hidden flex gap-4 mb-5 w-[135px] justify-end  flex-wrap">
              <SocialButton
                title={"Facebook"}
                lightIcon={"/icons/Facebook.svg"}
                onClick={() =>
                  handleSocialClick("https://www.facebook.com/codebiosispvtltd")
                }
              />
              <SocialButton
                title={"LinkedIn"}
                lightIcon={"/icons/LinkedIn.svg"}
                onClick={() =>
                  handleSocialClick(
                    "https://www.linkedin.com/company/codebiosis-private-limited/?originalSubdomain=in"
                  )
                }
              />
              <SocialButton
                title={"Instagram"}
                lightIcon={"/icons/Instagram.svg"}
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
          <div className="hidden md:flex pb-4 2xl:pb-[50px] text-lg lg:text-3xl font-medium ">
            North India • South India  • USA
          </div>
          <div className="hidden md:block pb-[25px] text-lg lg:text-3xl font-medium">+91 6307 080 414</div>
          <div className="hidden md:block text-lg lg:text-3xl font-medium">sales@codebiosis.com</div>
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

          <div className="hidden md:flex gap-4 my-4 2xl:my-10">
            {socials.map((social, index) => (
              <SocialButton
                key={index}
                title={social.title}
                darkIcon={social.darkIcon}
                onClick={() => handleSocialClick(social.link)}
              />
            ))}
          </div>

          <div className="flex gap-[20px] md:gap-2 2xl:gap-8 items-center justify-center md:justify-start 2xl:pt-14">
            <Image
              src={"/partners/shopify-plus-partner.svg"}
              alt=""
              height={50}
              width={100}
            />
            <Image
              src={"/partners/adobe_solution_partner.svg"}
              alt=""
              height={50}
              width={100}
            />
            <Image
              src={"/partners/zoho_partner.svg"}
              alt=""
              height={50}
              width={100}
            />
          </div>

          <div className="md:hidden flex justify-between mt-10 mb-5 items-center">
            <Link href={"/terms-condition"} className="text-[13px] xl:text-3xl font-medium">Terms & Conditions</Link>
            <Separator
              className="w-px bg-[#D8D8D8] mx-6"
              orientation="vertical"
              style={{
                height: "18px",
                width: "2px",
                backgroundColor: "rgba(43, 43, 43, 1)",
              }}
            />
            <Link href={"/privacy-policy"} className="text-[13px] xl:text-3xl font-medium">Privacy & Cookie Policy</Link>
            <Separator
              className="w-px bg-[#D8D8D8] mx-6"
              orientation="vertical"
              style={{
                height: "18px",
                width: "2px",
                backgroundColor: "rgba(43, 43, 43, 1)",
              }}
            />
            <div className="text-[13px] xl:text-3xl font-medium">Sitemap</div>
          </div>
        </div>
      </div>

      <div className="flex py-4 w-full justify-center md:justify-between">
        <div className="text-[#8D8D8D] text-sm xl:text-3xl font-medium ">
          © 2023, CodeBiosis Private Limited.
        </div>

        <div className="hidden md:flex">
          <Link href={"/terms-condition"} className="text-[13px] xl:text-3xl font-medium">
            Trems & Condtions
          </Link>
          <Separator
            className="w-px bg-[#D8D8D8] mx-6"
            orientation="vertical"
            style={{ backgroundColor: "rgba(43, 43, 43, 1)" }}
          />
          <Link href={"/privacy-policy"} className="text-[13px] xl:text-3xl font-medium">
            Privacy & Cookie Policy
          </Link>
          <Separator
            className="w-px bg-[#D8D8D8] mx-6"
            orientation="vertical"
            style={{ backgroundColor: "rgba(43, 43, 43, 1)" }}
          />
          <div className="text-[13px] xl:text-3xl font-medium">Sitemap</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;