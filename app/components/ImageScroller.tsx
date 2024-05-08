"use client";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { useRef, useState } from "react";

export const ImageScroller = ({ images }: { images: StaticImageData[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const scrollTo = (index: number) => {
    const width = containerRef.current?.clientWidth;
    containerRef.current?.scrollTo({
      top: 0,
      left: (width ?? 0) * index,
      behavior: "smooth",
    });
    setActive(index);
  };
  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="w-full overflow-x-hidden grid grid-flow-col auto-cols-[100%] snap-mandatory no-scrollbar"
      >
        {images.map((photo, index) => (
          <Image
            src={photo}
            key={index}
            alt={`banner photo ${index}`}
            className="w-svw h-full object-cover snap-center shrink-0"
          />
        ))}
      </div>
      <div className="absolute left-[50%] bottom-0 -translate-x-[50%] flex gap-2 z-40 p-4">
        {images.map((_, index) => (
          <button
            key={`button${index}`}
            onClick={() => scrollTo(index)}
            className={`${
              index === active ? "bg-blue-dark" : "bg-white"
            } rounded-full h-4 w-4 shadow-md`}
          ></button>
        ))}
      </div>
    </div>
  );
};
