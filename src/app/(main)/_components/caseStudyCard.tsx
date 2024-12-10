import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface CaseStudyProps {
  id?: string;
  title: string;
  description: string;
  categories: string[];
  image: string;
  className?: string;
}

const CaseStudyCard: FC<CaseStudyProps> = ({
  title,
  description,
  categories,
  className,
  image,
  id,
}) => {
  const navigate = useRouter();
  return (
    <div
      className={cn(
        " ps-4 xl:px-12 3xl:px-24 rounded overflow-hidden my-12 3xl:my-28 !h-full",
        className
      )}
    >
    
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full"
          />
          <Image
            src="/icons/angle_icon.svg"
            alt=""
            width={25}
            height={25}
            className="absolute bottom-3 right-3 bg-primary-natural rounded-full p-2 3xl::w-12 3xl::h-12 cursor-pointer"
            onClick={() => navigate.push(`/case-study/${id}`)}
          />
        </div>
        <div className="py-5 2xl:py-12 flex flex-col gap-5">
          <div className="font-bold text-xl md:text-xl lg:text-2xl 4xl:text-[38px] 3xl:mb-2">
            {title}
          </div>
          <p className="text-[#525252] text-base xl:text-xl 2xl:text-2xl max-w-[700px]">
            {description}
          </p>
        </div>
    
      <div className="pb-2 flex flex-wrap gap-2 3xl:gap-5">
        {categories.map((category) => (
          <Button
            key={category}
            className="inline-block rounded-full px-2 xl:px-4 py-1.5 xl:py-3 text-base xl:text-xl 3xl:text-[28px] border-[#2B2B2B] text-[#2B2B2B] font-bold"
            variant={"outline"}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;
