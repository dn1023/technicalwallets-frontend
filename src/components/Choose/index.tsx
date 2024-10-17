import Link from "next/link";
import Image from "next/image";
//import wave from './../../../public/images/choose/06.png'

const Choose = () => {
  return (
    <>
      <section
        id="choose"
        className="relative z-10 overflow-hidden bg-[url('/images/choose/background.jpg')] bg-no-repeat bg-left-top bg-cover"
      >
        <div className="absolute inset-0 top-0 w-full lg:w-6/12 bg-white/60 z-[-1]">
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center space-y-4">
            <div className="w-full px-4 lg:w-6/12">
              {/* <div style={{ backgroundImage: `url(${wave.src})` }} className="w-full bg-left-top">
              </div> */}
              <div className="mx-auto p-5 max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-lime-600 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Architectural Design and Research
                </h1>
                <p className="text-base !leading-relaxed text-black dark:text-body-color-dark sm:text-lg md:text-xl">
                  Architectural design and research are fundamental components of the built environment, shaping the spaces we inhabit and influencing our daily lives. This relationship is pivotal in creating functional, aesthetically pleasing, and sustainable structures.
                </p>
              </div>
            </div>
            <div className="hidden md:block w-full md:w-6/12">
              <div className="mx-auto max-w-[800px] flex justify-end">
                <Image src="/images/choose/04.png" alt="hero image" width={358} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
