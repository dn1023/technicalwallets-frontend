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
                    Get Your Dirty Clothes Cleaned It is Simple And Affordable
                  </h1>
                  <p className="text-base !leading-relaxed text-white sm:text-lg md:text-xl">
                    Expert in Dry Cleaning - Bedding - Wash, Dry & Fold, Ironing, Alteration, Shoe Repair and more.
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
                        href="https://www.google.com/maps/place/Dry+Cleaning+White+And+Bright/@51.530682,0.03955,17z/data=!4m16!1m9!3m8!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!2sDry+Cleaning+White+And+Bright!8m2!3d51.5306879!4d0.0395535!9m1!1b1!16s%2Fg%2F11c2phb6w4!3m5!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!8m2!3d51.5306879!4d0.0395535!16s%2Fg%2F11c2phb6w4?entry=ttu"
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
