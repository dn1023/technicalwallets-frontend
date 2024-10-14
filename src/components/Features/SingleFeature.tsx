import Image from "next/image";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { id, icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp justify-center items-center text-center" data-wow-delay=".15s">
        {/* <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div> */}
        <div className="hover:animate-bounce">
          <div className="mx-auto flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 shadow-xl h-[200px] w-[200px]">
            <Image src={icon} alt="hero image" className="dark:invert" width={100} height={80} />
          </div>
          <div className="mx-auto mb-5 mt-[-25px] flex items-center justify-center rounded-full bg-amber-500 shadow-xl h-[50px] w-[50px]">
            {id}
          </div>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-body-color-dark sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
