import Image from "next/image";
import { Timeline, Steps } from 'antd';

const About = () => {

  return (
    <section id="about" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="px-4 w-full">
              {/* <Timeline
                mode="left"
                items={[
                  {
                    label: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        What is Technical Wallet?
                      </h3>
                    ),
                    children: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Technical Wallet offers a comprehensive range of design services tailored to meet diverse needs. Our collection spans modern aesthetics to timeless styles, meticulously curated to inspire and enhance your projects. Our expert designers are closely attuned to the latest market trends, delivering designs that are visually striking and functionally robust. Suitable for both residential and commercial spaces, our designs meticulously ensure that every detail aligns with your vision, perfectly embodying the ethos you aim to project.
              </p>
                    ),
                  },
                  {
                    label: '2015-09-01 09:12:11',
                    children: 'Solve initial network problems',
                  },
                  {
                    children: 'Technical testing',
                  },
                  {
                    label: '2015-09-01 09:12:11',
                    children: 'Network problems being solved',
                  },
                ]}
              /> */}
              <Steps
                current={3}
                direction="vertical"
                items={[
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        What is Technical Wallet?
                      </h3>
                    ),
                    description:(
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Technical Wallet offers a comprehensive range of design services tailored to meet diverse needs. Our collection spans modern aesthetics to timeless styles, meticulously curated to inspire and enhance your projects. Our expert designers are closely attuned to the latest market trends, delivering designs that are visually striking and functionally robust. Suitable for both residential and commercial spaces, our designs meticulously ensure that every detail aligns with your vision, perfectly embodying the ethos you aim to project.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Transforming Ideas into Reality
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        At Technical Wallet, we excel in transforming your creative visions into tangible outcomes. Based in WideWorld, we offer a comprehensive suite of services that includes creating stunning designs, detailed blueprints, and precise fabrication drawings. Our expertise encompasses a variety of domains including architecture, interior design, landscape, industrial design, and furniture creation. Whether your project requires shop drawings or detailed construction plans, our dedicated team ensures meticulous execution with precision and care. Trust us to make your ideas a reality, ensuring that every project we undertake achieves the desired results.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
            
            {/* <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                What is Technical Wallet?
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Technical Wallet offers a comprehensive range of design services tailored to meet diverse needs. Our collection spans modern aesthetics to timeless styles, meticulously curated to inspire and enhance your projects. Our expert designers are closely attuned to the latest market trends, delivering designs that are visually striking and functionally robust. Suitable for both residential and commercial spaces, our designs meticulously ensure that every detail aligns with your vision, perfectly embodying the ethos you aim to project.
              </p>
            </div> */}
            {/* <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Transforming Ideas into Reality
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                At Technical Wallet, we excel in transforming your creative visions into tangible outcomes. Based in WideWorld, we offer a comprehensive suite of services that includes creating stunning designs, detailed blueprints, and precise fabrication drawings. Our expertise encompasses a variety of domains including architecture, interior design, landscape, industrial design, and furniture creation. Whether your project requires shop drawings or detailed construction plans, our dedicated team ensures meticulous execution with precision and care. Trust us to make your ideas a reality, ensuring that every project we undertake achieves the desired results.
              </p>
            </div> */}
            <div className="w-full px-4 pb-8">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Our Expertise
              </h3>
            </div>
            <div className="px-4 w-full">
              <Steps
                current={10}
                direction="vertical"
                items={[
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Comprehensive Design Services
                      </h3>
                    ),
                    description:(
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        At Technical Wallet, we provide a wide array of design services tailored to meet your specific needs. Whether your preference leans towards modern aesthetics or timeless styles, our diverse collection is meticulously curated to inspire and enhance your projects. Engage with our expert designers who are well-versed in current market trends and capable of delivering designs that are both aesthetically pleasing and functionally effective. Our designs are suited for both residential and commercial spaces, tailored to ensure that every detail perfectly aligns with your vision. Discover the ideal design that embodies your ethos and transforms your concepts into reality.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Conceptual Design Conversion
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Transform your conceptual designs into precise blueprints. At Technical Wallet, we excel in converting your creative ideas into detailed blueprints essential for accurate project execution. Our experienced team uses advanced software and tools to meticulously craft blueprints that are not only visually appealing but also technically precise. We understand the critical importance of accuracy in every line and measurement, ensuring that your vision is faithfully represented. Trust us to deliver blueprints that lay the foundation for successful projects, significantly reducing the risk of errors and enhancing overall efficiency.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Blueprint Conversion
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Transform your designs into precise 3D renderings and visualization designs. At Technical Wallet, converting your creative ideas into accurate blueprints is our forte. We meticulously transform your designs into detailed blueprints essential for flawless execution during the construction phase. Our team of experienced professionals employs advanced software and tools to create blueprints that are visually compelling and technically robust. We prioritize precision in every line and measurement, ensuring that your vision is precisely translated into reality. Trust us to provide you with blueprints that form the solid foundation for your successful projects, minimizing risks and maximizing efficiency.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Hand Sketch Conversion
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Transform your hand sketches into precise 3D renderings, visualization designs, or blueprints—or even combine both. At Technical Wallet, converting your creative ideas from simple sketches to detailed visual representations is our expertise. Our experienced team uses advanced software and tools to meticulously transform your sketches into high-quality, technically sound renderings or blueprints. We emphasize precision in every line and measurement, ensuring that your vision is accurately captured and represented. Trust us to provide you with renderings and blueprints that not only look impressive but also lay the groundwork for successful project execution, minimizing risks and boosting efficiency.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        IFC / Shop Drawings
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Get precise IFC / Shop drawings tailored to your project. At Technical Wallet, we produce detailed IFC and shop drawings crucial for the accurate manufacturing and installation of building components. Our skilled team works closely with you to understand every nuance of your project, ensuring that all details are thoroughly documented. These drawings provide clear instructions and detailed specifications for manufacturers and installers, reducing the risk of errors and enhancing communication. Utilizing industry-standard practices and advanced technology, we deliver drawings that are both practical and highly detailed. Choosing Technical Wallet for your IFC and shop drawings ensures that your components are fabricated and installed to the highest standards of quality and precision.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Construction Drawings
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Get precise construction drawings tailored to your project. At Technical Wallet, we produce detailed construction drawings essential for the accurate execution of your building projects. Our skilled team works closely with you to grasp the complexities of your project, ensuring that every detail is meticulously documented. These drawings provide clear instructions and specifications for construction teams, minimizing the risk of miscommunication and construction errors. Utilizing industry-standard practices and the latest technology, we ensure that our drawings are both functional and informative. By choosing Technical Wallet for your construction drawings, you ensure that your project is constructed to the highest standards of accuracy and quality.
                      </p>
                    ),
                  },
                  {
                    title: (
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                        Fabrication / Workshop Drawings
                      </h3>
                    ),
                    description: (
                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Get precise fabrication drawings tailored to your project. At Technical Wallet, we produce detailed fabrication drawings that form the backbone of your manufacturing process. Our skilled team collaborates closely with you to understand the intricacies of your project, capturing every detail with accuracy. These drawings provide clear instructions and specifications for fabricators, thereby minimizing the risk of miscommunication and errors. Utilizing industry-standard practices and cutting-edge technology, we ensure that our drawings are both functional and visually informative. Choosing Technical Wallet for your fabrication drawings guarantees that your project is constructed to the highest standards of quality and precision.
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
            {/* <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Comprehensive Design Services
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                At Technical Wallet, we provide a wide array of design services tailored to meet your specific needs. Whether your preference leans towards modern aesthetics or timeless styles, our diverse collection is meticulously curated to inspire and enhance your projects. Engage with our expert designers who are well-versed in current market trends and capable of delivering designs that are both aesthetically pleasing and functionally effective. Our designs are suited for both residential and commercial spaces, tailored to ensure that every detail perfectly aligns with your vision. Discover the ideal design that embodies your ethos and transforms your concepts into reality.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Conceptual Design Conversion
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Transform your conceptual designs into precise blueprints. At Technical Wallet, we excel in converting your creative ideas into detailed blueprints essential for accurate project execution. Our experienced team uses advanced software and tools to meticulously craft blueprints that are not only visually appealing but also technically precise. We understand the critical importance of accuracy in every line and measurement, ensuring that your vision is faithfully represented. Trust us to deliver blueprints that lay the foundation for successful projects, significantly reducing the risk of errors and enhancing overall efficiency.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Blueprint Conversion
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Transform your designs into precise 3D renderings and visualization designs. At Technical Wallet, converting your creative ideas into accurate blueprints is our forte. We meticulously transform your designs into detailed blueprints essential for flawless execution during the construction phase. Our team of experienced professionals employs advanced software and tools to create blueprints that are visually compelling and technically robust. We prioritize precision in every line and measurement, ensuring that your vision is precisely translated into reality. Trust us to provide you with blueprints that form the solid foundation for your successful projects, minimizing risks and maximizing efficiency.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Hand Sketch Conversion
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Transform your hand sketches into precise 3D renderings, visualization designs, or blueprints—or even combine both. At Technical Wallet, converting your creative ideas from simple sketches to detailed visual representations is our expertise. Our experienced team uses advanced software and tools to meticulously transform your sketches into high-quality, technically sound renderings or blueprints. We emphasize precision in every line and measurement, ensuring that your vision is accurately captured and represented. Trust us to provide you with renderings and blueprints that not only look impressive but also lay the groundwork for successful project execution, minimizing risks and boosting efficiency.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                IFC / Shop Drawings
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Get precise IFC / Shop drawings tailored to your project. At Technical Wallet, we produce detailed IFC and shop drawings crucial for the accurate manufacturing and installation of building components. Our skilled team works closely with you to understand every nuance of your project, ensuring that all details are thoroughly documented. These drawings provide clear instructions and detailed specifications for manufacturers and installers, reducing the risk of errors and enhancing communication. Utilizing industry-standard practices and advanced technology, we deliver drawings that are both practical and highly detailed. Choosing Technical Wallet for your IFC and shop drawings ensures that your components are fabricated and installed to the highest standards of quality and precision.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Construction Drawings
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Get precise construction drawings tailored to your project. At Technical Wallet, we produce detailed construction drawings essential for the accurate execution of your building projects. Our skilled team works closely with you to grasp the complexities of your project, ensuring that every detail is meticulously documented. These drawings provide clear instructions and specifications for construction teams, minimizing the risk of miscommunication and construction errors. Utilizing industry-standard practices and the latest technology, we ensure that our drawings are both functional and informative. By choosing Technical Wallet for your construction drawings, you ensure that your project is constructed to the highest standards of accuracy and quality.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Fabrication / Workshop Drawings
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Get precise fabrication drawings tailored to your project. At Technical Wallet, we produce detailed fabrication drawings that form the backbone of your manufacturing process. Our skilled team collaborates closely with you to understand the intricacies of your project, capturing every detail with accuracy. These drawings provide clear instructions and specifications for fabricators, thereby minimizing the risk of miscommunication and errors. Utilizing industry-standard practices and cutting-edge technology, we ensure that our drawings are both functional and visually informative. Choosing Technical Wallet for your fabrication drawings guarantees that your project is constructed to the highest standards of quality and precision.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                3D Animation
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Enhance your project presentations with our 3D animation services, adding a dynamic layer to your visualizations.
              </p>
            </div>
            <div className="w-full px-4">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-body-color-dark">
                Certification Stamp on Drawings
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                We provide official stamps on drawings, affirming their adherence to professional and regulatory standards.
              </p>
            </div> */}
            {/* <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[550px] lg:ml-0">
                <Image
                  src="/images/about/book_suitable_slots1.png"
                  alt="about-image"
                  width={550}
                  height={450}
                  className="mx-auto max-w-full drop-shadow-three lg:mr-0"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <h3 className="mb-10 text-base !leading-relaxed sm:text-lg md:text-xl">
                  Avail professional laundry and dry cleaning services. Book your order on a day and time suitable to you.
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
