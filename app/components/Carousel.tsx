"use client";
import Image from "next/image";
import carousel_placeholder from "@/public/carousel_placeholder.svg";
import { CarouselItemType } from "@/app/types";
import chevron_right from "@/public/chevron_right.svg";
import { useRef, useState } from "react";

export const Carousel = ({ data }: { data: CarouselItemType[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const scrollTo = (multiplier: number) => {
      const width = containerRef.current?.clientWidth / data.length;
      setActive((curr)=>curr + width*multiplier);
      containerRef.current?.scrollTo({
        top: 0,
        left: active + width * multiplier,
        behavior: "smooth",
      });
    };
  return (
    <div className="flex w-full justify-items-start items-center">
      <button onClick={()=>scrollTo(-1)} className=" -mr-2 rotate-180 bg-blue-dark rounded-full flex items-center justify-center h-8 w-8">
        <Image src={chevron_right} alt="Περιήγηση αριστερά στο καρουζέλ" />
      </button>
      <div ref={containerRef} className="gap-4 flex overflow-x-scroll no-scrollbar max-w-[1020px] w-full min-w-[225px]">
        {data.map((item, i) => (
          <CarouselItem
            title={item.title}
            key={i}
            image={item.image ?? undefined}
          />
        ))}
      </div>
      <button onClick={()=>scrollTo(1)} className=" -ml-2 bg-blue-dark rounded-full flex items-center justify-center h-8 w-8">
        <Image src={chevron_right} alt="Περιήγηση αριστερά στο καρουζέλ" />
      </button>
    </div>
  );
};

const CarouselItem = ({ title, image }: CarouselItemType) => {
  return (
    <div className="w-1/4 min-w-[225px] flex flex-col justify-between items-center overflow-hidden rounded-lg bg-white">
      <Image
        src={image ?? carousel_placeholder}
        alt="carousel placeholder"
        className={`h-[150px] w-full ${
          image ? "object-cover" : "object-contain p-6"
        }`}
      />
      <h2 className="text-center font-semibold text-sm p-4 my-auto text-blue-light">
        {title}
      </h2>
    </div>
  );
};
