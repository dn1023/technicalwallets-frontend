import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import wave from './../../../public/images/offers/wave-white-gray.svg'
import Image from "next/image";

const Offers = () => {
  return (
    <>
      <section id="offers" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] dark:border-white/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="w-full mx-auto text-center max-w-[800px] mb-[100px]">
            <h2 className="mb-4 text-3xl uppercase font-bold !leading-tight text-amber-500 dark:text-body-color-dark sm:text-4xl md:text-[45px]">
              Quick, Effective, and Innovative Digital Architecture Products
            </h2>
          </div>
          <div className="-mx-4 flex flex-wrap items-center pb-[50px]">
            <div className="w-full px-4 lg:w-1/2">
              <div className="w-full mx-auto mb-[30px]">
                <h2 className="mb-4 uppercase text-center font-bold !leading-tight text-dark dark:text-body-color-dark sm:text-4xl">
                  Rapid Project Delivery
                </h2>
                <div className="mb-10 text-base text-center !leading-relaxed sm:text-lg md:text-xl">
                  We understand the importance of time in today&#39;s fast-paced environment. Our agile development process ensures that your projects are completed quickly without compromising quality.
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative justify-center relative mx-auto max-w-[550px] -rotate-24 lg:mr-0">
                <Image
                  src="/images/offers/rapid.jpg"
                  alt="about-image"
                  width={550}
                  height={450}
                  className="mx-auto max-w-full drop-shadow-three border-solid border-2 border-lime-500 shadow-2xl lg:mr-0"
                />
                <div className="hidden xl:block absolute inset-0 -left-10 -top-10 h-[100px] w-[100px] bg-orange-800 shadow-2xl"></div>
                <div className="hidden xl:block absolute -bottom-10 -right-10 h-[150px] w-[150px] bg-lime-500 shadow-2xl"></div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center pb-[50px]">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative justify-center relative mx-auto max-w-[550px] -rotate-24 lg:mr-0">
                <Image
                  src="/images/offers/solution.jpg"
                  alt="about-image"
                  width={550}
                  height={550}
                  className="mx-auto max-w-full drop-shadow-three border-solid border-2 border-white shadow-2xl lg:mr-0"
                />
                <div className="hidden xl:block absolute inset-0 -left-10 top-10 h-[5px] w-[1000px] bg-fuchsia-800 shadow-2xl z-[-2]"></div>
                <div className="hidden xl:block absolute bottom-10 left-40 h-[5px] w-[1000px] bg-cyan-500 shadow-2xl z-[-2]"></div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="w-full mx-auto mb-[30px]">
                <h2 className="mb-4 uppercase text-center font-bold !leading-tight text-dark dark:text-body-color-dark sm:text-4xl">
                  Innovative Solutions
                </h2>
                <div className="mb-10 text-base text-center !leading-relaxed sm:text-lg md:text-xl">
                  We leverage the latest technologies and trends in digital architecture to create solutions that are not only functional but also visually stunning. Our team of experts stays ahead of the curve to provide you with the most innovative designs.
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center pb-[50px]">
            <div className="w-full px-4 lg:w-1/2">
              <div className="w-full mx-auto mb-[30px]">
                <h2 className="mb-4 uppercase text-center font-bold !leading-tight text-dark dark:text-body-color-dark sm:text-4xl">
                  User-Centric Design
                </h2>
                <div className="mb-10 text-base text-center !leading-relaxed sm:text-lg md:text-xl">
                Our products are crafted with the end user in mind. We focus on creating intuitive and engaging experiences that resonate with your audience, ensuring that your digital architecture is both effective and user-friendly.
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative justify-center relative mx-auto max-w-[550px] -rotate-24 lg:mr-0">
                <div className="hidden xl:block absolute inset-0 -left-10 top-10 h-[250px] w-[50px] bg-lime-800 shadow-2xl"></div>
                <div className="hidden xl:block absolute bottom-10 -right-10 h-[250px] w-[50px] bg-orange-500 shadow-2xl"></div>
                <Image
                  src="/images/offers/design.jpg"
                  alt="about-image"
                  width={550}
                  height={450}
                  className="mx-auto max-w-full drop-shadow-three border-solid border-2 border-lime-500 shadow-2xl lg:mr-0"
                />
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center pb-[50px]">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative justify-center relative mx-auto max-w-[550px] -rotate-24 lg:mr-0">
                <Image
                  src="/images/offers/services.jpg"
                  alt="about-image"
                  width={550}
                  height={450}
                  className="mx-auto max-w-full drop-shadow-three border-solid border-2 border-white shadow-2xl lg:mr-0"
                />
                <div className="hidden xl:block absolute inset-0 top-44 -left-32 h-[250px] w-[250px] bg-red-800 shadow-2xl"></div>
                {/* <div className="absolute -left-10 top-10 h-[250px] w-[50px] bg-orange-800 shadow-2xl"></div> */}
                
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="w-full mx-auto mb-[30px]">
                <h2 className="mb-4 uppercase text-center font-bold !leading-tight text-dark dark:text-body-color-dark sm:text-4xl">
                  Comprehensive Services
                </h2>
                <div className="mb-10 text-base text-center !leading-relaxed sm:text-lg md:text-xl">
                  From digital modeling and visualization to project management and implementation, we offer a full suite of services to support your architectural needs. Our integrated approach means you receive cohesive solutions tailored to your specific requirements.
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center pb-[50px]">
            <div className="w-full px-4 lg:w-1/2">
              <div className="w-full mx-auto mb-[30px]">
                <h2 className="mb-4 uppercase text-center font-bold !leading-tight text-dark dark:text-body-color-dark sm:text-4xl">
                  Sustainability Focus
                </h2>
                <div className="mb-10 text-base text-center !leading-relaxed sm:text-lg md:text-xl">
                  We believe in creating solutions that benefit not only our clients but also the environment. Our designs incorporate sustainable practices that reduce energy consumption and promote eco-friendly initiatives.
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative justify-center relative mx-auto max-w-[550px] -rotate-24 lg:mr-0">
                <div className="hidden xl:block absolute inset-0 left-10 -top-10 h-[150px] w-[250px] bg-lime-800 shadow-2xl"></div>
                <div className="hidden xl:block absolute -bottom-10 -right-10 h-[250px] w-[250px] bg-orange-500 shadow-2xl"></div>
                <Image
                  src="/images/offers/sustainability.jpg"
                  alt="about-image"
                  width={550}
                  height={450}
                  className="mx-auto max-w-full drop-shadow-three border-solid border-2 border-lime-500 shadow-2xl lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Offers;
