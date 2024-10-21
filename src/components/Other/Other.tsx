'use client';
import Breadcrumb from "@/components/Common/Breadcrumb";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Metadata } from "next";
import { Empty, Image as ImageAnd } from 'antd';
import { useRouter } from 'next/navigation';
import ProductService from "@/api/product.service";
import SingleProduct from "@/components/Products/SingleProduct";
import productsData from "@/components/Products/productsData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import HelpService from "@/api/help.service";
import ReactPannellum, { getConfig, addScene, addHotSpot, setConfig } from "react-pannellum";
import CartService from "@/api/cart.service";
import AuthService from "@/api/auth.service";

interface Props {
  params: string;
}

const Other = (props: Props) => {

  const API = process.env.NEXT_PUBLIC_BACKEND_API;
  const catalogs = props.params.replace(/_/g, " ").split("%3D");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [pageName, setPageName] = useState('');

  const config = {
    sceneId: "circle",
    autoRotate: -2,
    autoLoad: true,
    compass: true,
  }

  const [description, setDescription] = useState(
    {
      "Conceptual Design" : "Transform your conceptual designs into precise blueprints. At Technical Wallet, we excel in converting your creative ideas into detailed blueprints essential for accurate project execution. Our experienced team uses advanced software and tools to meticulously craft blueprints that are not only visually appealing but also technically precise. We understand the critical importance of accuracy in every line and measurement, ensuring that your vision is faithfully represented. Trust us to deliver blueprints that lay the foundation for successful projects, significantly reducing the risk of errors and enhancing overall efficiency.",
      "BluePrints" : "Transform your designs into precise 3D renderings and visualization designs. At Technical Wallet, converting your creative ideas into accurate blueprints is our forte. We meticulously transform your designs into detailed blueprints essential for flawless execution during the construction phase. Our team of experienced professionals employs advanced software and tools to create blueprints that are visually compelling and technically robust. We prioritize precision in every line and measurement, ensuring that your vision is precisely translated into reality. Trust us to provide you with blueprints that form the solid foundation for your successful projects, minimizing risks and maximizing efficiency.",
      "Hand Sketch" : "Transform your hand sketches into precise 3D renderings, visualization designs, or blueprints—or even combine both. At Technical Wallet, converting your creative ideas from simple sketches to detailed visual representations is our expertise. Our experienced team uses advanced software and tools to meticulously transform your sketches into high-quality, technically sound renderings or blueprints. We emphasize precision in every line and measurement, ensuring that your vision is accurately captured and represented. Trust us to provide you with renderings and blueprints that not only look impressive but also lay the groundwork for successful project execution, minimizing risks and boosting efficiency.",
      "Shop Drawing" : "Get precise IFC / Shop drawings tailored to your project. At Technical Wallet, we produce detailed IFC and shop drawings crucial for the accurate manufacturing and installation of building components. Our skilled team works closely with you to understand every nuance of your project, ensuring that all details are thoroughly documented. These drawings provide clear instructions and detailed specifications for manufacturers and installers, reducing the risk of errors and enhancing communication. Utilizing industry-standard practices and advanced technology, we deliver drawings that are both practical and highly detailed. Choosing Technical Wallet for your IFC and shop drawings ensures that your components are fabricated and installed to the highest standards of quality and precision.",
      "Constructions Drawing" : "Get precise construction drawings tailored to your project. At Technical Wallet, we produce detailed construction drawings essential for the accurate execution of your building projects. Our skilled team works closely with you to grasp the complexities of your project, ensuring that every detail is meticulously documented. These drawings provide clear instructions and specifications for construction teams, minimizing the risk of miscommunication and construction errors. Utilizing industry-standard practices and the latest technology, we ensure that our drawings are both functional and informative. By choosing Technical Wallet for your construction drawings, you ensure that your project is constructed to the highest standards of accuracy and quality.",
      "Fabrication Drawing" : "Get precise fabrication drawings tailored to your project. At Technical Wallet, we produce detailed fabrication drawings that form the backbone of your manufacturing process. Our skilled team collaborates closely with you to understand the intricacies of your project, capturing every detail with accuracy. These drawings provide clear instructions and specifications for fabricators, thereby minimizing the risk of miscommunication and errors. Utilizing industry-standard practices and cutting-edge technology, we ensure that our drawings are both functional and visually informative. Choosing Technical Wallet for your fabrication drawings guarantees that your project is constructed to the highest standards of quality and precision.",
    }
  );

  useEffect(() => {
    if(catalogs[2] == '')
      setPageName(catalogs[0].concat(' / ', catalogs[1]));
    else
      setPageName(catalogs.join(' / '));
  }, []);

  const onSend = async () => {
    if (email.trim() == '' || name.trim() == '' || phone.trim() == '' || message.trim() == '') {
      toast.warn("Please input correctly.")
      return;
    }
    try {
      const userid = AuthService.getCurrentUser() == null ? '0' : AuthService.getCurrentUser().id;
      //userid, productid, category, subcategory, subsubcategory, name, email, message, phone
      const response = await CartService.register(userid, '', catalogs[0], catalogs[1], catalogs[2], name, email, phone, message);
      if (response !== undefined) {
        if (response?.message == "Cart registered successfully!") {
          toast.success("Registered successfully!");
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        }
        else
          toast.warn(response?.message);
      }
    } catch (error) {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      toast.error("Server connection failed!");
      toast.warning("Please try later.");
    }
  }


  return (
    <>
      <ToastContainer />
      <div className="min-h-[500px] bg-[url('/images/background/architectural-blueprints.jpg')] bg-cover bg-left-top bg-no-repeat">
        <Breadcrumb
          pageName={pageName}
          description={description[catalogs[1]]}
        />
      </div>
      {/* <ReactPannellum
        id="1"
        sceneId="circle"
        imageSource="/images/panorama/modern_bathroom.jpg"
        config={config}
        className="w-full"
        style={{
          width: "600px",
          height: "400px",
          background: "#000000"
        }}
      /> */}
      <section id="other" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="w-full flex flex-wrap">
            <div
              className="w-full mb-12 rounded-lg"
              data-wow-delay=".15s
                "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 md:space-x-2">
                <div className="">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your User Name"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="mb-8">
                    <label
                      htmlFor="telephone"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Telephone
                    </label>
                    <input
                      type="telephone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your Telephone"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mb-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your Message"
                  className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                ></textarea>
              </div>
              <div className="w-full">
                <button onClick={onSend} className="text-nowrap rounded-lg bg-primary px-7 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                  SUBMIT MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Other;
