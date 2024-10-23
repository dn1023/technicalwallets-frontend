"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ProductService from "@/api/product.service";
import { Empty, Image as ImageAnd, Modal } from 'antd';

const ProductManagement = () => {

  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  //Variables for new products
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverimage, setCoverImage] = useState(null);
  const [oldprice, setOldPrice] = useState('');
  const [newprice, setNewPrice] = useState('');
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [look, setLook] = useState(0);
  const [handshake, setHandShake] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await ProductService.getAll();
      if (res !== undefined) {
        if (res?.length > 0) {
          setProducts(res);
          setLoading(res?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchProducts().catch(error => console.error('Failed to fetch products:', error));
  }, [])

  const onReload = async () => {
    //toast.success("Saved successfully!")
    if(catalog2 == '' ||  catalog3 == ''){
      setSelect('Please select the catalog');
      return;
    }
    setProducts([]);
    setLoading(false);
    const res = await ProductService.getAllByCategory("Design Catalog", catalog2, catalog3);
    if (res !== undefined) {
      if (res?.length > 0) {
        setProducts(res);
        setLoading(res?.length > 0);
        toast.success("Reloaded successfully!")
        // Navigate on success
        // Example: router.push('/'); // Assuming you have a router instance available
      }
      else {
        toast.warn(res);
      }
    }
  }

  const onDelete = async (id:number) => {
    const res = await ProductService.delete(id);
    if (res !== undefined) {
      if (res?.message == "Product deleted successfully!") {
        toast.success(res?.message);
        onReload();
      }
      else
        toast.warn(res?.message)
    }
  }

  const onSave = async () => {
    //toast.success("Saved successfully!")
    if(!isUpdate)
    {
      if (select.trim() == ''
          || title.trim() == ''
          || coverimage == null) {
          toast.warning("Please check product information.");
          return;
      }
    }
    else
    {
      if (title.trim() == '') {
          toast.warning("Please check product title.");
          return;
      }
    }
    
    //setLoading(false);
    try{

      const formData = new FormData();
      formData.append('coverimage', coverimage);
      formData.append('title', title);
      formData.append('content', content);
      formData.append('param1', param1);
      formData.append('param2', param2);
      formData.append('oldprice', oldprice);
      formData.append('newprice', newprice);
      formData.append('category', "Design Catalog");
      formData.append('subcategory', catalog2);
      formData.append('subsubcategory', catalog3);
      formData.append('look', look.toString());
      formData.append('handshake', handshake.toString());

      if( !isUpdate ) {
        const res = await ProductService.register(formData);
        if (res !== undefined) {
          if (res?.message == "Product registered successfully!") {
            //onReload();
            toast.success(res?.message);
            setTitle('');
            setContent('');
            setCoverImage(null);
            fileInputRef.current.value = '';
            setOldPrice('');
            setNewPrice('');
            setParam1('');
            setParam2('');
            setLook(0);
            setHandShake(0);
            setIsModalOpen(false);
            onReload();
            // Navigate on success
            // Example: router.push('/'); // Assuming you have a router instance available
          }
          else {
            toast.warn(res?.message);
          }
        } 
      }
      else
      {
        const res = await ProductService.update(
          id,
          title,
          content,
          oldprice,
          newprice,
          param1,
          param2,
          look.toString(),
          handshake.toString(),
        );
        if (res !== undefined) {
          if (res?.message == "Product updated successfully!") {
            //onReload();
            toast.success(res?.message);
            setTitle('');
            setContent('');
            setCoverImage(null);
            fileInputRef.current.value = '';
            setOldPrice('');
            setNewPrice('');
            setParam1('');
            setParam2('');
            setLook(0);
            setHandShake(0);
            setIsModalOpen(false);
            onReload();
            // Navigate on success
            // Example: router.push('/'); // Assuming you have a router instance available
          }
          else {
            toast.warn(res?.message);
          }
        } 
      }
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error("Server connection failed!");
      toast.warning("Please try later.");
    } finally {
      setLoading(false);
    }
  }

  const [status, setStatus] = useState(false);
  const [catalog, setCatalog] = useState([false, false, false, false, false, false]);
  const [catalog2, setCatalog2] = useState('');
  const [catalog3, setCatalog3] = useState('');
  const [select, setSelect] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false); // flase -> Add product, true -> Update product
  const [id,setId] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (status && !event.target.closest('#catalog')) {
        setStatus(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [status]);
  
  useEffect(() => {
    if(catalog2 == '' ||  catalog3 == ''){
      setSelect('Please select the catalog');
      return;
    }
    setSelect(catalog2 + '/' + catalog3);
    setStatus(false);
    onReload();
  }, [catalog2, catalog3]);

  const onOpenAddProduct=()=>{
    if(select == 'Please select the catalog')
      toast.warning("Please select the catalog.");
    else
    {
      setTitle('Technical Wallet');
      setContent('Our architectural design products and services offer a comprehensive approach to transforming your vision into reality. We specialize in creating cutting-edge architectural solutions that blend functionality with aesthetic appeal.');
      setCoverImage(null);
      /* fileInputRef.current.value = ''; */
      setOldPrice('0');
      setNewPrice('0');
      setParam1('Size: Adjustable');
      setParam2('Finish: As per Client request');
      setLook(0);
      setHandShake(0);
      setIsUpdate(false);
      setIsModalOpen(true);
    }
  }

  const onUpdate = async (id:string) => {
    setIsUpdate(true);
    setId(id);
    const res = await ProductService.getById(id);
    if (res !== undefined) {
      console.log(res);
      setTitle(res.title);
      setContent(res.content);
      setOldPrice(res.oldprice);
      setNewPrice(res.newprice);
      setParam1(res.param1);
      setParam2(res.param2);
      setLook(res.look);
      setHandShake(res.handshake);
      setIsModalOpen(true);
    }
  }

  const onImageUpdate = async () => {
    const formData = new FormData();
    formData.append('coverimage', coverimage);
    formData.append('id', id);
    const res = await ProductService.updateImage(formData);
    if (res !== undefined) {
      if (res?.message == "Image updated successfully!") {
        toast.success(res?.message);
      }
      else {
        toast.warn(res?.message);
      }
    }
  }

  return (
    <>
      <div className="relative p-8 dark:bg-gray-dark">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Products Management
        </h1>
        <div className="flex flex-row justify-between mb-5">
          <div id="catalog" className="relative w-1/2 my-auto">
            <button
              onClick={() => setStatus(!status)}
              className="uppercase text-nowrap flex text-base font-bold text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
            >
              {select}&nbsp;&nbsp;
              {
                status ? 
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
              }
              </button>
              <div className={`${status ? "block" : "hidden" } absolute top-[40px] bg-white shadow-lg backdrop-blur-sm z-[5] flex flex-col max-h-[500px] overflow-auto`}>
                <button
                  onClick={() => setCatalog([!catalog[0], false, false, false, false, false])}
                  className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                >
                  <p>Architecture Design</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {
                  catalog[0] ? 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                  }
                </button>
                {
                  catalog[0] &&
                  <>
                    <button
                      onClick={()=>{setCatalog2('Architecture Design'); setCatalog3('House');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      House
                    </button>
                    <button
                      onClick={()=>{setCatalog2('Architecture Design'); setCatalog3('Villa');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Villa
                    </button>
                    <button
                      onClick={()=>{setCatalog2('Architecture Design'); setCatalog3('Palace');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Palace
                    </button>
                    <button
                      onClick={()=>{setCatalog2('Architecture Design'); setCatalog3('Comm./Resid. Towers');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Comm./Resid. Towers
                    </button>
                    <button
                      onClick={()=>{setCatalog2('Architecture Design'); setCatalog3('Residential Buildings');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Residential Buildings
                    </button>
                    <button
                      onClick={()=>{setCatalog2('Architecture Design'); setCatalog3('Commercial Buildings');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Commercial Buildings
                    </button>
                    <button
                      onClick={()=>{setCatalog2('Architecture Design'); setCatalog3('Hotels');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Hotels
                    </button>
                    <button
                      onClick={()=>{setCatalog2('Architecture Design'); setCatalog3('GYM&SPA');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      GYM & SPA
                    </button>
                  </>
                }
                <button
                  onClick={() => setCatalog([false, !catalog[1], false, false, false, false])}
                  className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                >
                  Landscape Design&nbsp;&nbsp;
                  {
                  catalog[1] ? 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                  }
                </button>
                {
                catalog[1] &&
                <>
                  <button
                    onClick={()=>{setCatalog2('Landscape Design'); setCatalog3('Parks');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Parks
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Landscape Design'); setCatalog3('Streetscape');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Streetscape
                  </button>
                </>
                }
                <button
                  onClick={() => setCatalog([false, false, !catalog[2], false, false, false])}
                  className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                >
                  Industrial Design&nbsp;&nbsp;
                  {
                  catalog[2] ? 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                  }
                </button>
                {
                catalog[2] &&
                <>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Tiny Houses');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Tiny Houses
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Portable Houses');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Portable Houses
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('RV/Camper');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    RV/Camper
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Tent');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Tent
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Tiny Restaurant/Cafe');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Tiny Restaurant/Cafe
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Portable Truck Food/Cafe');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Portable Truck Food/Cafe
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Portable Ice Cream');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Portable Ice Cream
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Kiosks/Exhibition');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Kiosks/Exhibition
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Furniture');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Furniture&lsquo;s
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Lights');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Lights
                  </button>
                  <button
                    onClick={()=>{setCatalog2('Industrial Design'); setCatalog3('Art/Decoration');}}
                    className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Art/Decoration
                  </button>
                </>
                }
                
                <button
                  onClick={() => setCatalog([false, false, false, !catalog[3], false, false])}
                  className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                >
                  Marine Design&nbsp;&nbsp;
                  {
                  catalog[3] ? 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                  }
                </button>
                {
                  catalog[3] &&
                  <>
                    <button
                      onClick={()=>{setCatalog2('Marine Design'); setCatalog3('Floating Houses');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Floating Houses
                    </button>
                    <button
                      onClick={()=>{setCatalog2('Marine Design'); setCatalog3('Floating Restaurant/Cafe');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Floating Restaurant/Cafe
                    </button>
                    <button
                      onClick={()=>{setCatalog2('Marine Design'); setCatalog3('Yacht/Boat');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Yacht/Boat
                    </button>
                  </>
                }
                <button
                  onClick={() => setCatalog([false, false, false, false, !catalog[4], false])}
                  className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                >
                  Products Design&nbsp;&nbsp;
                  {
                  catalog[4] ? 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                  }
                </button>
                {
                  catalog[4] &&
                  <>
                    <button
                      onClick={()=>{setCatalog2('Products Design'); setCatalog3('Assemblies Toy');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Assemblies Toy&apos;s
                    </button>
                  </>
                }
                <button
                  onClick={() => setCatalog([false, false, false, false, false, !catalog[5]])}
                  className="flex justify-between text-base text-nowrap lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                >
                  Prototype Design&nbsp;&nbsp;
                  {
                  catalog[5] ? 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>:
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                  }
                </button>
                {
                  catalog[5] &&
                  <>
                    <button
                      onClick={()=>{setCatalog2('Prototype Design'); setCatalog3('Equipment');}}
                      className="text-nowrap bg-slate-200 flex text-base lg:mr-0 lg:inline-flex lg:px-4 lg:py-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      Equipment&apos;s
                    </button>
                  </>
                }
              </div>
          </div>
          <button
            onClick={onOpenAddProduct}
            className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
          >
            Add Product
          </button>
        </div>
        <div className="w-full mb-5">
          {
            loading ? (
              <table className="w-full border-collapse border border-slate-400 table-auto">
                <thead className="bg-slate-100 dark:bg-black dark:text-body-color-dark">
                  <tr>
                    <th className="border border-slate-300 p-3">Image</th>
                    <th className="border border-slate-300 p-3">Title</th>
                    <th className="border border-slate-300 p-3">content</th>
                    <th className="border border-slate-300 p-3">OldPrice</th>
                    <th className="border border-slate-300 p-3">NewPrice</th>
                    <th className="border border-slate-300 p-3">Update</th>
                    <th className="border border-slate-300 p-3">Delete</th>
                  </tr>
                </thead>
                <tbody className="text-dark dark:text-body-color-dark">
                  {products.map((item, index) =>
                    <tr key={index} className="hover:bg-slate-100 dark:hover:bg-black">
                      <td className="border border-slate-300 p-2">
                        <div className="mx-auto flex border-2 border-amber-500 w-[100px] h-[100px] items-center justify-center">
                          {/* <Image src={API + "products/" + item.coverimage} className="" alt="hero image" width={50} height={50} /> */}
                          <ImageAnd
                            width={100}
                            src={API + "products/" + item.coverimage}
                          />
                        </div>
                      </td>
                      <td className="border border-slate-300 p-2 text-nowrap">{item.title}</td>
                     
                      <td className="border border-slate-300 p-2"><div className="text-wrap">{item.content}</div></td>
                      <td className="border border-slate-300 p-2">{item.newprice}</td>
                      <td className="border border-slate-300 p-2">{item.oldprice}</td>
                      <td className="border border-slate-300 text-center p-2 hover:text-black dark:hover:text-white">
                        <button
                          onClick={() => onUpdate(item.id)}
                        >
                          Update
                        </button>
                      </td>
                      <td className="border border-slate-300 text-center p-2 hover:text-black dark:hover:text-white">
                        <button
                          onClick={() => onDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            ) :
              (
                <div className="min-h-[300px] flex items-center justify-center"><Empty /></div>
              )
          }
        </div>
        <div className="flex flex-row items-center justify-end">
          <button
            onClick={onReload}
            className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" /></svg>
            &nbsp;Reload&nbsp;&nbsp;
          </button>
        </div>
      </div>
      <Modal
        title={
          <>
            <h3 className="mb-11 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
            {isUpdate ? "Update Product" : "Add Product"}
            </h3>
          </>
        } 
        open={isModalOpen} 
        onCancel={()=>{
          setIsModalOpen(false);
        }}
        footer={
          <>
            <div className="flex flex-row items-center justify-end space-x-2 mb-3">
              <button
                onClick={onSave}
                className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
              >
                &nbsp;&nbsp;{isUpdate ? "Update" : "Save"}&nbsp;&nbsp;
              </button>
              <button
                onClick={()=>setIsModalOpen(false)}
                className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
              > 
                &nbsp;Cancel&nbsp;
              </button>
            </div>
          </>
        }
        width={500}
        centered
      >
        <div className="w-full">
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
              Title
            </h3>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title"
              className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
              Content
            </h3>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter the content"
              className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <div className="flex md:space-x-2">
            <div className="mb-5 w-1/2 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                Old Price
              </h3>
              <input
                type="text"
                value={oldprice}
                onChange={(e) => setOldPrice(e.target.value)}
                placeholder="Enter old price"
                className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
            <div className="mb-5 w-1/2 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                New Price
              </h3>
              <input
                type="text"
                value={newprice}
                onChange={(e) => setNewPrice(e.target.value)}
                placeholder="Enter current price"
                className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>
          <div className="flex md:space-x-2">
            <div className="mb-5 w-1/2 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                Size
              </h3>
              <input
                type="text"
                value={param1}
                onChange={(e) => setParam1(e.target.value)}
                placeholder="Enter the param1"
                className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
            <div className="mb-5 w-1/2 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                Finish
              </h3>
              <input
                type="text"
                value={param2}
                onChange={(e) => setParam2(e.target.value)}
                placeholder="Enter current price"
                className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>
          <div className="flex md:space-x-2">
            <div className="mb-5 w-1/2 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                Preview
              </h3>
              <input
                type="number"
                value={look}
                onChange={(e) => setLook(Number(e.target.value))}
                placeholder="Enter the param1"
                className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
            <div className="mb-5 w-1/2 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                HandShake
              </h3>
              <input
                type="number"
                value={handshake}
                onChange={(e) => setHandShake(Number(e.target.value))}
                placeholder="Enter the param2"
                className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>
          <div className="mb-8 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
            <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
              Image
            </h3>
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => {
                setCoverImage(e.target.files[0]); 
                isUpdate && onImageUpdate();
              }}
              placeholder="Enter image"
              accept="image/*"
              className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductManagement;
