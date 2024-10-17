import Link from "next/link";
import Image from "next/image";

const Choice = () => {
  return (
    <>
      <section
        id="choice"
        className="relative z-10 overflow-hidden bg-[url('/images/choice/slider-2.jpg')] bg-center bg-no-repeat"
      >
        <div className="backdrop-blur-md bg-green-800/30 pb-16 pt-16">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center justify-center space-y-4">
              <div className="w-full px-4 lg:w-6/12">
                <div className="mx-auto max-w-[800px] text-center">
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Our Commitment to Excellence
                  </h1>
                  <p className="text-base !leading-relaxed text-white sm:text-lg md:text-xl">
                    We prioritize our clients&apos;s needs above all else. By actively listening to your feedback and understanding your goals, we tailor our services to create solutions that truly resonate with your audience.
                  </p>
                  {/* <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    
                  </div> */}
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="mx-auto max-w-[800px] text-center">
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-col sm:space-y-4">
                    <Image src="/images/choice/rating_stars.svg" alt="hero image" width={191} height={34} />
                    <div className="place-self-center !leading-relaxed text-body-color dark:text-body-color-dark hover:text-body-color/70 dark:text-body-color-dark dark:hover:text-body-color/70 sm:text-lg md:text-xl">
                      <Link
                        href="/"
                        className="text-white"
                      >
                        Ranked #1 by customers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choice;
