import Link from "next/link";
import Image from "next/image";
//import wave from './../../../public/images/choose/06.png'

const Choose = () => {
  return (
    <>
      <section
        id="choose"
        className="relative z-10 overflow-hidden bg-[url('/images/choose/06.png')]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center space-y-4">
            <div className="w-full px-4 lg:w-6/12">
              {/* <div style={{ backgroundImage: `url(${wave.src})` }} className="w-full bg-left-top">
              </div> */}
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-lime-600 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  We Clean Your Clothes You Should Relax
                </h1>
                <p className="text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Expert in Dry Cleaning - Bedding - Wash, Dry & Fold, Ironing, Alteration, Shoe Repair and more.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="mx-auto max-w-[800px] flex justify-end">
                <Image src="/images/choose/02.png" alt="hero image" width={762} height={629} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
