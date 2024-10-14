'use client'
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import Address from "@/components/Order/Address"
import ItemSelection from "@/components/Order/ItemSelection"
import Preference from "@/components/Order/Preference"
import Collection from "@/components/Order/Collection"
import Contact from "@/components/Order/Contact"
import Coupon from "@/components/Order/Coupon"
import OrderService from "@/api/order.service";
import AuthService from "@/api/auth.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
/* import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry and Dry Cleaning in LonDon",
  description: "Laundry and Dry Cleaning in LonDon",
  // other metadata
}; */

const Order = () => {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(0);
  const [addressData, setAddressData] = useState(
    {
      postcode: '',
      address: '',
      manual: '',
      detail: '',
      type: '',
      hotelnumber: '',
      hotelname: '',
      position: {
        lat: 0,
        lng: 0
      },
      positionchecked: false,
    }
  );
  const [orderList, setOrderList] = useState([])
  const [preferences, setPreferences] = useState(
    {
      washmode: 'Hot Wash 30-90 C',
      detergent: 'Keep Bio',
      fabricsoftener: 'Yes',
      white: '30 degrees',
      coloranddirtcollector: 'Yes',
      numberofloads: 'Standard (1 load)',
      tumbledryer: 'HOT',
      finishing: 'Wash, Dry & Fold',
      starchonshirts: 'Light (default)',
    }
  )

  const [collectionDelivery, setCollectionDelivery] = useState(
    {
      collectiondate: new Date().getTime(),
      collectiontime: '',
      deliverydate: new Date().getTime() + 24 * 60 * 60 * 1000,
      deliverytime: '',
      frequencies: 'just once',
      orderinstructions: '',
    }
  )

  const [contact, setContact] = useState(
    {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      repassword: '',
    }
  )

  const [coupon, setCoupon] = useState('');

  const [servicesTotal, setServicesTotal] = useState(0);
  const [serviceCharges, setServiceCharges] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  /* const updateContact = useCallback((currentValue) => {
    // Implementation of updateAddress
    // Use someState or other props/state here if necessary
    setContact(currentValue);
  }, []); */
  const updateCoupon = useCallback((currentValue) => {
    // Implementation of updateAddress
    // Use someState or other props/state here if necessary
    setCoupon(currentValue);
  }, []); 

  const updateCollectionDelivery = useCallback((currentValue) => {
    // Implementation of updateAddress
    // Use someState or other props/state here if necessary
    setCollectionDelivery(currentValue);
  }, []);

  const updateAddress = useCallback((currentValue) => {
    // Implementation of updateAddress
    // Use someState or other props/state here if necessary
    setAddressData(currentValue);
  }, []); // Add actual dependencies here

  const updateOrder = useCallback((currentValue) => {
    // Implementation of updateAddress
    // Use someState or other props/state here if necessary
    setOrderList(currentValue);
    let tempServicesTotal = 0
    currentValue.map((item) =>
      tempServicesTotal += item.price * item.count
    )
    setServicesTotal(tempServicesTotal);
    setServiceCharges(0.99);
    setGrandTotal(tempServicesTotal + 0.99);
  }, []); // Add actual dependencies here

  const updatePreference = useCallback((currentValue) => {
    // Implementation of updateAddress
    // Use someState or other props/state here if necessary
    setPreferences(currentValue);
  }, []); // Add actual dependencies here

  /* const getDateStringFromNumber = ({ value }) => {
    console.log(value);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    };
    const newDate = new Date(Number(value));
    return newDate.toLocaleDateString('en-US', options)
  } */

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if(currentUser == null)
    {
      toast.warning("Please sign in.");
      setTimeout(() => {
        router.push("/")
      }, 3000); 
    }
    // Delay in milliseconds
  }, [])

  const pageUp = () => {
    if (pageIndex == 0) {
      if (addressData.postcode == '' || addressData.address == '') {
        toast.warning("Please enter address fields correctly.");
        return;
      }
    }
    if (pageIndex == 1) {
      if (orderList.length == 0) {
        toast.warning("Please select items.");
        return;
      }
      if(servicesTotal < 20)
      {
        toast.warning("Minimum Order Value is £20.00");
        return;
      }
    }
    /* if (pageIndex == 4) {
      if (contact.firstname.trim() == ''
          || contact.lastname.trim() == ''
          || contact.email.trim() == ''
          || contact.phone.trim() == ''
          || contact.password.trim() == ''
          || contact.repassword.trim() == '') {
          toast.warning("Please check contact information.");
          return;
        }

        if (contact.password != contact.repassword) {
          toast.warning("Please check password.");
          return;
        }
    } */
    const pageNumber = pageIndex + 1 > 5 ? 5 : pageIndex + 1;
    setPageIndex(pageNumber);

  }

  const pageDown = () => {
    const pageNumber = pageIndex - 1 < 0 ? 0 : pageIndex - 1;
    setPageIndex(pageNumber);
  }

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const summaryPageUp = () => {
    if (pageIndex == 5) {
      orderSend();
    }
  }

  const orderSend = async () => {
    setLoading(true);
    try {
      const userid = AuthService.getCurrentUser() != null ? AuthService.getCurrentUser().id : null;
      const response = await OrderService.register(userid, addressData, orderList, preferences, collectionDelivery, coupon); // Assuming login returns a promise
      if (response !== undefined) {
        if (response?.message == "Order registered successfully!") {
          toast.success(response.message);
          setPageIndex(0);
          //router.push('/signin');
        }
        else
          toast.warning(response.message);
      }
      else{
        toast.error("Server connection failed!");
        toast.warning("Please try later.");
      }
      //router.push('/profile'); // Navigate to profile page upon successful login
      //window.location.reload(); // Reload the page
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      setMessage(resMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />{/* bg-[#00c6ff]  dark:bg-gray-dark text-nowrap */}
      <section className="overflow-hidden pt-[40px]">
        <div className="container">
          <div className="w-full flex md:flex-row flex-col justify-between md:space-x-2">
            <div className={`h-[100px] flex items-center w-full ${pageIndex < 0 && "grayscale"}`}>
              <div className="rounded-full h-[90px] w-[90px] bg-amber-500 shadow-md flex items-center justify-center hover:animate-shake">
                <Image src="/images/ordercomponent/location.png" className="" alt="hero image" width={65} height={65} />
              </div>
              <div className="px-5 text-base text-amber-500 font-semibold text-nowrap">Address</div>
            </div>
            <div className={`h-[100px] flex items-center w-full ${pageIndex < 1 && "grayscale"}`}>
              <div className="rounded-full h-[90px] w-[90px] bg-amber-500 shadow-md flex items-center justify-center hover:animate-shake">
                <Image src="/images/ordercomponent/laundry-basket.png" className="" alt="hero image" width={65} height={65} />
              </div>
              <div className="px-5 text-base text-amber-500 font-semibold">Items</div>
            </div>
            <div className={`h-[100px] flex items-center w-full ${pageIndex < 2 && "grayscale"}`}>
              <div className="rounded-full h-[90px] w-[90px] bg-amber-500 shadow-md flex items-center justify-center hover:animate-shake">
                <Image src="/images/ordercomponent/bleach.png" className="" alt="hero image" width={65} height={65} />
              </div>
              <div className="px-5 text-base text-amber-500 font-semibold">Prefrerences</div>
            </div>
            <div className={`h-[100px] flex items-center w-full ${pageIndex < 3 && "grayscale"}`}>
              <div className="rounded-full h-[90px] w-[90px] bg-amber-500 shadow-md flex items-center justify-center hover:animate-shake">
                <Image src="/images/ordercomponent/delivery.png" className="" alt="hero image" width={65} height={65} />
              </div>
              <div className="px-5 text-base text-amber-500 font-semibold">Scheduling</div>
            </div>
            <div className={`h-[100px] flex items-center w-full ${pageIndex < 4 && "grayscale"}`}>
              <div className="rounded-full h-[90px] w-[90px] bg-amber-500 shadow-md flex items-center justify-center hover:animate-shake">
                <Image src="/images/ordercomponent/coupons.png" className="" alt="hero image" width={65} height={65} />
              </div>
              <div className="px-5 text-base text-amber-500 font-semibold text-nowrap">Coopen Code</div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden pb-[180px] pt-[40px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-4/12 sticky top-0 text-base dark:text-body-color-dark">
              <div className="rounded-lg shadow-three dark:bg-gray-dark mb-10 bg-slate-200 dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold dark:border-white dark:border-opacity-10">
                  Order Summary
                </h3>
                <ul className="p-8">
                  <li className="mb-3 pb-3 dark:border-white dark:border-opacity-10">
                    <div className="font-bold">
                      {/* <Image src="/images/order/check.png" className="ml-[-10px]" alt="hero image" width={24} height={24} />
                      &nbsp;&nbsp; */}Address:
                    </div>
                    <div>PostCode:&nbsp;{addressData.postcode}</div>
                    {
                      addressData.address != 'Not on the list?' &&
                      <div>Address:&nbsp;{addressData.address}</div>
                    }
                    <div>Detail Address:&nbsp;{addressData.detail}</div>
                    {
                      addressData.address == 'Not on the list?' &&
                      <div>Manual Address:&nbsp;{addressData.manual}</div>
                    }

                    <div>Address Type:&nbsp;{addressData.type}</div>
                    {
                      addressData.type == 'hotel' &&
                      <div>Hotel Room Number:&nbsp;{addressData.hotelnumber}</div>
                    }
                    {
                      addressData.positionchecked &&
                      <>
                        <div>lat:&nbsp;{Number(addressData.position.lat).toFixed(4)}</div>
                        <div>lng:&nbsp;{Number(addressData.position.lng).toFixed(4)}</div>
                      </>
                    }

                  </li>
                  <li className="mb-3 pb-3 dark:border-white dark:border-opacity-10">
                    <div className="font-bold">Item Selection:</div>
                    {orderList.map((item, index) =>
                      <div key={index} className="flex flex-row">
                        <div className="grow">{item.title}</div>
                        <div className="w-[25px] self-end">{item.count}</div>
                        <div className="w-[70px] self-end">£{Number(item.count * item.price).toFixed(2)}</div>
                      </div>
                    )}

                  </li>
                  <li className="mb-3 pb-3 dark:border-white dark:border-opacity-10">
                    <div className="font-bold">Collection & Delivery:</div>
                    {
                      collectionDelivery.collectiondate !== 0 &&
                      (
                        <div>
                          Collection:&nbsp;&nbsp;{new Date(Number(collectionDelivery.collectiondate)).toLocaleDateString('en-US', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short'
                          })}&nbsp;&nbsp;&nbsp;{collectionDelivery.collectiontime}
                        </div>
                      )
                    }
                    {
                      collectionDelivery.deliverydate !== 0 &&
                      (
                        <div>
                          Delivery:&nbsp;&nbsp;{new Date(Number(collectionDelivery.deliverydate)).toLocaleDateString('en-US', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short'
                          })}&nbsp;&nbsp;&nbsp;{collectionDelivery.deliverytime}
                        </div>
                      )
                    }

                  </li>
                  <li className="mb-3 pb-3 dark:border-white dark:border-opacity-10">
                    <div className="font-bold">Contact Details:</div>
                    {
                      contact.firstname !== '' &&
                      <div>Fist Name: {contact.firstname}</div>
                    }
                    {
                      contact.lastname !== '' &&
                      <div>last Name: {contact.lastname}</div>
                    }
                    {
                      contact.email !== '' &&
                      <div>Email Address: {contact.email}</div>
                    }
                    {
                      contact.phone !== '' &&
                      <div>Phone Number: {contact.phone}</div>
                    }
                  </li>
                </ul>
              </div>
              {
                pageIndex == 5 &&
                <div className="rounded-lg shadow-three dark:bg-gray-dark bg-slate-200 dark:shadow-none">
                    <div className="p-8 dark:border-white dark:border-opacity-10">
                      <div className="mb-3">Minimum Order Value £20.00</div>
                      <div className="flex flex-row">
                        <div className="grow">Services Total</div>
                        <div className="w-[70px] self-end">£{Number(servicesTotal).toFixed(2)}</div>
                      </div>
                      {/* <div className="flex flex-row">
                        <div className="grow">Service Charges</div>
                        <div className="w-[70px] self-end">£{Number(serviceCharges).toFixed(2)}</div>
                      </div>
                      <div className="flex flex-row">
                        <div className="grow">Grand Total</div>
                        <div className="w-[70px] self-end font-bold">£{Number(grandTotal).toFixed(2)}</div>
                      </div> */}
                    </div>
                </div>
              }

              {/* <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Category
                </h3>
                <ul className="px-8 py-6">
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Tailwind Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Landing page
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Startup
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Multipurpose
                    </a>
                  </li>
                </ul>
              </div>
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap px-8 py-6">
                  <TagButton text="Themes" />
                  <TagButton text="UI Kit" />
                  <TagButton text="Tailwind" />
                  <TagButton text="Startup" />
                  <TagButton text="Business" />
                </div>
              </div>

              <NewsLatterBox /> */}
              {/* <div className="flex flex-col items-center justify-center mt-10 mb-5">
                <button
                  onClick={summaryPageUp}
                  className="rounded-lg bg-amber-500 px-7 py-3 text-base w-full text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
                >
                  {
                    pageIndex == 4 ? "Complete" : "Next"
                  }
                </button>
              </div>
              <div className="text-base text-center">By continuing you agree to our Terms & Conditions and Privacy Policy.</div> */}
            </div>
            <div className="w-full px-4 lg:w-8/12 max-w-[1200px]">
              <div className={`${pageIndex === 0 ? "block" : "hidden"}`}><Address updateAddress={updateAddress} /></div>
              <div className={`${pageIndex === 1 ? "block" : "hidden"}`}><ItemSelection updateOrder={updateOrder} /></div>
              <div className={`${pageIndex === 2 ? "block" : "hidden"}`}><Preference updatePreference={updatePreference} /></div>
              <div className={`${pageIndex === 3 ? "block" : "hidden"}`}><Collection updateCollectionDelivery={updateCollectionDelivery} /></div>
              <div className={`${pageIndex === 4 ? "block" : "hidden"}`}><Coupon updateCoupon={updateCoupon} /></div>
              {
                pageIndex == 5 &&
                <div className="p-8 rounded-lg shadow-three dark:bg-gray-dark h-[800px] flex items-center justify-center">
                  <div className={`${loading ? "hidden" : "block"}`}>
                    <div className="mb-8 text-base font-bold text-black dark:text-body-color-dark">
                      By continuing, you&apos;ll gain access to our comprehensive dry cleaning services.
                    </div>
                    <div className="mb-5 pb-4 flex justify-center">
                      <button
                        onClick={summaryPageUp}
                        className="rounded-lg bg-amber-500 px-7 py-3 text-base text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                  <div className={`${loading ? "block" : "hidden"}`}>
                    <Image src="/images/ordercomponent/loading.png" alt="hero image" className="dark:invert animate-spin" width={64} height={64} />
                  </div>
                </div>
              }
              <div className={`flex flex-row items-center ${pageIndex == 0 || pageIndex == 5 ? "justify-end" : "justify-between"} mt-10 mb-10`}>
                <button
                  onClick={pageDown}
                  className={`rounded-lg bg-amber-500 px-7 py-3 text-base text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60 ${pageIndex > 0 && pageIndex <= 5 ? "block" : "hidden"}`}
                >
                  Previous
                </button> 
                <button
                  onClick={pageUp}
                  className={`rounded-lg bg-amber-500 px-7 py-3 text-base text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60 ${pageIndex < 5 ? "block" : "hidden"}`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
