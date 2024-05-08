import Image from "next/image";
import carousel_placeholder from "@/public/carousel_placeholder.svg";
import { CarouselItemType } from "@/app/types";
import chevron_right from "@/public/chevron_right.svg";

export const Carousel = ({ data }: { data: CarouselItemType[] }) => {
  return (
    <div className="flex w-full justify-items-start items-center">
      <button className=" -mr-2 rotate-180 bg-blue-dark rounded-full flex items-center justify-center h-8 w-8">
        <Image src={chevron_right} alt="Περιήγηση αριστερά στο καρουζέλ" />
      </button>
      <div className="gap-4 flex overflow-x-scroll max-w-[1020px] w-full min-w-[221px]">
        {data.map((item, i) => (
          <CarouselItem
            title={item.title}
            key={i}
            image={item.image ?? undefined}
          />
        ))}
      </div>
      <button className=" -ml-2 bg-blue-dark rounded-full flex items-center justify-center h-8 w-8">
        <Image src={chevron_right} alt="Περιήγηση αριστερά στο καρουζέλ" />
      </button>
    </div>
  );
};

const CarouselItem = ({ title, image }: CarouselItemType) => {
  return (
    <div className="w-1/4 min-w-[221px] flex flex-col justify-between items-center overflow-hidden rounded-lg bg-white">
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
