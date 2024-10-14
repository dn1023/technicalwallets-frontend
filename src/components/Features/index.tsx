import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="How Laundry Works"
            paragraph="DRY CLEANING & LAUNDRY MADE EASY."
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          {/* <div className="flex flex-col items-center justify-center mt-10">
            <Link
              href="/order"
              className="rounded-lg bg-amber-500 px-8 py-4 text-base w-[300px] text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/80"
            >
              BOOK NOW
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
