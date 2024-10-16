import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="relative z-10 overflow-hidden pt-[120px] pb-[30px] dark:bg-gray-dark md:pt-[150px] xl:pt-[80px] 2xl:pt-[100px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 sm:w-6/12 md:w-3/12 pb-[30px] md:pb-0 hover:animate-tada">
              <div className="mx-auto max-w-[800px] h-[300px] bg-orange-500 rounded-md flex flex-col items-center justify-center">
                <Image src="/images/hero/1.png" alt="hero image" width={65} height={65} />
                <p className="text-center text-white font-bold sm:text-lg md:text-xl p-2">Custom Architectural Designs</p>
                <p className="text-white text-base text-center mx-4">Tailored designs that reflect your unique style and requirements, whether for residential, commercial, or public spaces.</p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-6/12 md:w-3/12 pb-[30px] md:pb-0 hover:animate-tada">
              <div className="mx-auto max-w-[800px] h-[300px] bg-emerald-950 rounded-md flex flex-col items-center justify-center">
                <Image src="/images/hero/2.png" alt="hero image" width={65} height={65} />
                <p className="text-center text-white font-bold sm:text-lg md:text-xl p-2">3D Modeling and Visualization</p>
                <p className="text-white text-base text-center mx-4">Advanced 3D modeling services that allow you to visualize your project in detail before construction begins, ensuring clarity and precision in design.</p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-6/12 md:w-3/12 pb-[30px] md:pb-0 hover:animate-tada">
              <div className="mx-auto max-w-[800px] h-[300px] bg-lime-500 rounded-md flex flex-col items-center justify-center">
                <Image src="/images/hero/3.png" alt="hero image" width={65} height={65} />
                <p className="text-center text-white font-bold sm:text-lg md:text-xl p-2">Sustainable Design Solutions</p>
                <p className="text-white text-base text-center mx-4">Eco-friendly design practices that prioritize sustainability, energy efficiency, and environmental stewardship.</p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-6/12 md:w-3/12 pb-[30px] md:pb-0 hover:animate-tada">
              <div className="mx-auto max-w-[800px] h-[300px] bg-purple-950 rounded-md flex flex-col items-center justify-center">
                <Image src="/images/hero/4.png" alt="hero image" width={65} height={65} />
                <p className="text-center text-white font-bold sm:text-lg md:text-xl p-2">Interior Design Services</p>
                <p className="text-white text-base text-center mx-4">Comprehensive interior design solutions that enhance the usability and beauty of your spaces, from concept to execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
