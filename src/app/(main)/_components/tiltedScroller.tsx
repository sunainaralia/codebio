// "use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Lenis from "@studio-freight/lenis";

export const ParallaxTiltedScroll = ({
  images,
  className,
  imageW,
  imageH,
  childrenClassName,
}: {
  images: string[];
  className?: string;
  imageW?: number;
  imageH?: number;
  childrenClassName?: string;
}) => {
  const gridRef = useRef<any>(null);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    container: gridRef.current,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const translateSecond = useTransform(
    scrollYProgress,
    [0, 1],
    [imageW ? -(imageW - 100) * 2 : -300, 200]
  );
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "  rounded-3xl flex flex-col object-center overflow-hidden h-[200px] sm:h-[300px] lg:!h-[350px] w-full hover:scale-[1.02] transition-all duration-100 justify-center items-center",
        className
      )}
      ref={gridRef}
    >
      {/* testing  */}
      <motion.div
        className={cn(
          "grid items-start lg:ms-[-70px] mt-[120px]  4xl:mt-[200px] w-[110%] lg:w-[140%]  mx-auto gap-4 bg-[#FF8383]",
          childrenClassName
        )}
        transformTemplate={(z) => `rotate(${-30}deg)`}
      >
        {[firstPart, secondPart, thirdPart,firstPart].map((part, partIdx) => (
          <div
            key={partIdx}
            className={cn(
              "flex w-full h-[150px] sm:h-[250px] xl:h-[220px] 4xl:h-[280px] overflow-x-hidden gap-4",
              imageH ? `h-[${imageH}px]` : ""
            )}
          >
            {part.map((el, idx) => {
              const translate =
                partIdx === 0
                  ? translateFirst
                  : partIdx === 1
                  ? translateSecond
                  : translateThird;
              return (
                <motion.div
                  style={{
                    x: translate,
                    transitionDuration: "2s",
                    willChange: "transform",
                  }}
                  key={`grid-${partIdx}-${idx}`}
                >
                  <Image
                    src={el}
                    className={cn(
                      "gap-2  md:h-[300px] w-[200]  sm:w-[500px] rounded-md max-w-[500px] md:aspect-video object-cover object-top !m-0 !p-0",
                      [
                        imageH
                          ? `h-[398px] md:h-[${imageH}px] md:max-h-[${imageH}px]`
                          : "",
                        imageW ? `w-[${imageW}px] max-w-[${imageW}px]` : "",
                      ]
                    )}
                    height={imageH || 200}
                    width={imageW || 400}
                    alt="thumbnail"
                  />
                </motion.div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
};







