import Image from "next/image";
import { Steps } from 'antd';

const ContactDescription = () => {

  return (
    <section id="contactdesription" className="overflow-hidden pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* <div className="w-full px-4 pb-8">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Our Expertise
              </h3>
            </div> */}
            <div className="px-4 w-full">
              <Steps
                current={10}
                direction="vertical"
                items={[
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        For Support
                      </h3>
                    ),
                    description:(
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        If you&apos;re experiencing issues or have queries, please fill out the form below with your details, and our support team will get back to you promptly.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Sales Inquiries
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Interested in our designs or need a custom solution? Let us know your project details, and we&apos;ll reach out to discuss how we can meet your needs.
                        </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Design Conversion
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Have a conceptual design that needs professional drafting? Submit your concepts, and our experts will convert them into detailed blueprints ready for implementation.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Prepare Drawings
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Looking for precise and detailed architectural drawings? Provide us with your specifications, and our team will prepare high-quality technical drawings tailored to your requirements.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Get Stamped
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Need your drawings approved for construction? Our licensed professionals can provide stamping services to ensure your plans meet all local building codes and regulations.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Feedback
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Your feedback is invaluable to us. If you have comments or suggestions about our services, please share them with us. We&aposre committed to continuous improvement and serving you better.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Collaborations
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Excited about partnering with us? Send your proposal, and let&aposs explore how we can create something amazing together.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        3D Animation
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Enhance your project presentations with our 3D animation services, adding a dynamic layer to your visualizations.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Certification Stamp on Drawings
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        We provide official stamps on drawings, affirming their adherence to professional and regulatory standards.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
            <div className="w-full pt-5">
              <h3 className="text-center text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Thank you for choosing Technical Wallet. We look forward to assisting you!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDescription;
