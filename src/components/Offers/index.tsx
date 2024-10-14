import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleOffer from "./SingleOffer";
import offersData from "./offersData";
import wave from './../../../public/images/offers/wave-white-gray.svg'

const Offers = () => {
  return (
    <>
      <section id="offers" className="dark:bg-gray-dark ">
        {/* <div style={{ backgroundImage: `url(${wave.src})` }} className="w-full h-[58px] bg-left-top bg-repeat-x">
        </div> */}
        <div className="w-full pt-10 pb-10">
          <div className="container">
            {/*  <SectionTitle
              title="We offer quick and effective laundry and dry cleaning"
              paragraph=""
              center
            /> */}
            <div
              className="w-full mx-auto text-center max-w-[800px] mb-[100px]"
            >
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-body-color-dark sm:text-4xl md:text-[45px]">
                We offer quick and effective laundry and dry cleaning
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-3">
              {offersData.map((offer) => (
                <SingleOffer key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Offers;
