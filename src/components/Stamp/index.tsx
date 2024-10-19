import Image from "next/image";
import { Steps } from 'antd';

const Stamp = () => {

  return (
    <section id="contactdesription" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* <div className="w-full px-4 pb-8">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Our Expertise
              </h3>
            </div> */}
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                What is a Digital Stamp?
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                A digital stamp is a unique identifier that signifies authenticity and quality in your architectural designs. It can be applied to your digital drawings, plans, and presentations, providing an official mark of your work.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Why Use Our Digital Stamp?
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                <ul className="list-disc">
                  <li>Professionalism: Enhance the credibility of your designs.</li>
                </ul>
                <ol className="list-disc">
                  <li>Protection: Safeguard your intellectual property.</li>
                </ol>
                <ul className="list-disc">
                  <li>Branding: Create a consistent identity across your projects.</li>
                </ul>
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                How to Get Your Digital Stamp
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                <ul className="list-disc">
                  <li>Sign Up: Create an account on our website.</li>
                </ul>
                <ol className="list-disc">
                  <li>Upload Your Work: Submit your architectural designs for review.</li>
                </ol>
                <ul className="list-disc">
                  <li>Receive Your Stamp: After approval, you will receive a digital stamp to apply to your projects.</li>
                </ul>
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Pricing
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Our digital stamp service is available at competitive rates.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                FAQs
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                <ul className="list-disc">
                  <li>
                    How long does the approval process take?
                    <br/>Typically, approval takes 1-2 business days.
                  </li>
                </ul>
                <ol className="list-disc">
                  <li>
                    Can I use the stamp on physical prints?
                    <br/>Yes, you can print the stamp on your physical documents.
                  </li>
                </ol>
                <ul className="list-disc">
                  <li>
                    Is my work safe with you?
                    <br/>Absolutely! We prioritize the security and confidentiality of your designs.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stamp;
