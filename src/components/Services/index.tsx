import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import servicesData from "./servicesData";
import wave from './../../../public/images/offers/wave-white-gray.svg'

const Services = () => {
  return (
    <>
      <section id="services" className="dark:bg-gray-dark py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What We Offer"
            paragraph="SERVICES"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-3">
            {servicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
