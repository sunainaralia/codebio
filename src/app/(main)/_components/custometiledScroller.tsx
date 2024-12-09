"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Lenis from "@studio-freight/lenis";

export const ParallaxTiltedScrollcustom = ({
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

  const third = Math.ceil(images.length / 9);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "items-start  rounded-3xl flex flex-col object-center overflow-hidden h-[190px] sm:h-[300px] lg:h-[500px] md:h-[400px] xl:h-[600px] 3xl:h-[800px]  w-full hover:scale-[1.02] transition-all duration-100", // Added height for larger screens
        className
      )}
      ref={gridRef}
    >
      <motion.div
        className={cn(
          "grid items-start  ms-[-20px] sm:ms-[-80px] md:ms-[-150px] w-[700px] sm:w-[1000px]  md:w-[1500px] 2xl:w-[2000px] mx-auto gap-2 sm:gap-4 mt-[-80px] sm:mt-[-120px] md:mt-[-180px]  2xl:mt-[-200px] 4xl:mt-[-265px] bg-[#FFf] justify-center 4xl:w-[2500px]  ", // max-width and center horizontally
          childrenClassName
        )}
        transformTemplate={(z) => `rotate(${-15}deg)`}
      >
        {[firstPart, thirdPart, secondPart, thirdPart, firstPart].map(
          (part, partIdx) => (
            <div
              key={partIdx}
              className={cn(
                "flex w-full h-[120px]  md:h-[180px] 2xl:h-[240px] 4xl:h-[260px] overflow-x-hidden gap-2 sm:gap-4 justify-center items-center", // Ensure each part is centered
                imageH ? `h-[${imageH}px]` : "" // Image height remains the same
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
                        "gap-2 h-[150px] md:h-[340px] w-[500px] rounded-md max-w-[500px] md:aspect-video object-cover !m-0 !p-0 md:translate-y-[80px]",
                        [
                          imageH
                            ? `h-[150px] md:h-[${imageH}px] md:max-h-[${imageH}px]`
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
          )
        )}
      </motion.div>
    </div>
  );
};
