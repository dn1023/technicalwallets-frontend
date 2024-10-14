import Image from "next/image";
import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { id, icon, image, title } = service;
  return (
    <div className="w-full h-[500px] bg-white shadow-lg transition duration-200 hover:-translate-y-6 grayscale hover:grayscale-0">
      <div className="wow fadeInUp justify-center items-center text-center" data-wow-delay=".15s">
        <div className="mx-auto mt-[-25px] flex flex-wrap items-center justify-center">
          <Image src={image} alt="offer image" width={400} height={200} />
          <Image src="/images/services/trans.png" alt="offer image" className="absolute" width={400} height={200} />
        </div>
        <div className="flex justify-center">
          <div className="rounded-full bg-lime-600 w-[120px] h-[120px] flex items-center justify-center">
            <Image src={icon} alt="offer image" width={60} height={60} />
          </div>
        </div>
        <h3 className="mb-10 mt-10 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SingleService;
