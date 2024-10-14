"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import CategoryService from "@/api/category.service";
import ProductService from "@/api/product.service";

const ProductManagement = () => {
  const API=process.env.NEXT_PUBLIC_BACKEND_API;

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);

  //Variables for new products
  const [category, setCategory] = useState('11');
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [file, setFile] = useState(null);
  const [oldprice, setOldPrice] = useState('');
  const [newprice, setNewPrice] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await CategoryService.getAllCategories();
      if (res !== undefined) {
        if (res?.length > 0) {
          console.log(res);
          setCategories(res);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchCategories().catch(error => console.error('Failed to fetch categories:', error));
    const fetchProducts = async () => {
      const res = await ProductService.getAllProducts();
      if (res !== undefined) {
        if (res?.length > 0) {
          setProducts(res);
          //setLoading(res?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchProducts().catch(error => console.error('Failed to fetch products:', error));
  }, [])

  const onReload = async () => {
    //toast.success("Saved successfully!")
    setProducts([]);
    setLoading(false);
    const res = await ProductService.getAllProducts();
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
    const res = await ProductService.deleteById(id);
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
    if (category.trim() == ''
          || title.trim() == ''
          || paragraph.trim() == ''
          || newprice.trim() == ''
          || file == null) {
          toast.warning("Please check product information.");
          return;
    }

    //setLoading(false);
    try{
      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', title);
      formData.append('categoryid', category);
      formData.append('paragraph', paragraph);
      formData.append('oldprice', oldprice);
      formData.append('newprice', newprice);
      console.log(formData);
      const res = await ProductService.register(formData);
      if (res !== undefined) {
        if (res?.message) {
          //onReload();
          toast.success(res?.message);
          setTitle('');
          setParagraph('');
          setFile(null);
          setOldPrice('');
          setNewPrice('');
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
        else {
          toast.warn(res?.message);
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

  const onCancel = async () => {
    setModal(false);
  }

  const onShow = async () => {
    setModal(true);
  }

  return (
    <>
      <div className="relative p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight">
          Products Management
        </h1>
        <div className="flex flex-row justify-between mb-5 space-x-5">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-1/2 border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          >
            {
              categories.map((item, index) =>
                <option value={item.id} key={index}>{item.name}</option>
              )
            }
          </select>
          <button
            onClick={onShow}
            className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
          >
            New Product
          </button>
        </div>
        <div className="w-full mb-5">
          {
            loading ? (
              <table className="w-full border-collapse border border-slate-400 table-auto">
                <thead className="bg-slate-100 dark:bg-black dark:text-body-color-dark">
                  <tr>
                    <th className="border border-slate-300 p-3">Title</th>
                    <th className="border border-slate-300 p-3">Icon</th>
                    <th className="border border-slate-300 p-3">Paragraph</th>
                    <th className="border border-slate-300 p-3">OldPrice</th>
                    <th className="border border-slate-300 p-3">NewPrice</th>
                    <th className="border border-slate-300 p-3">Operation</th>
                  </tr>
                </thead>
                <tbody className="text-dark dark:text-body-color-dark">
                  {products.filter((item) => item.categoryid == category).map((item, index) =>
                    <tr key={index} className="hover:bg-slate-100 dark:hover:bg-black">
                      <td className="border border-slate-300 p-2 text-nowrap">{item.title}</td>
                      <td className="border border-slate-300 p-2">
                        <div className="mx-auto flex rounded-full border-2 border-amber-500 w-[50px] h-[50px] items-center justify-center">
                          <Image src={API+item.icon} className="rounded-full" alt="hero image" width={50} height={50} />
                        </div>
                      </td>
                      <td className="border border-slate-300 p-2"><div className="text-wrap">{item.paragraph}</div></td>
                      <td className="border border-slate-300 p-2">{item.newprice}</td>
                      <td className="border border-slate-300 p-2">{item.oldprice}</td>
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
                <span className="w-full text-red">Loading</span>
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
        <div className={`${modal ? "block":"hidden"} absolute top-0 right-0 p-8 rounded-lg shadow-three w-full bg-white dark:bg-gray-dark`}>
          <h1 className="mb-8 text-3xl font-bold leading-tight text-dark dark:text-body-color-dark sm:text-4xl sm:leading-tight">
            Products Management/New Product
          </h1>
          <div className="w-full">
            <div className="w-1/2 mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                Category
              </h3>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              >
                {
                  categories.map((item, index) =>
                    <option value={item.id} key={index}>{item.name}</option>
                  )
                }
              </select>
            </div>
            <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                Title
              </h3>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
            <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                Paragraph
              </h3>
              <input
                type="text"
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
                placeholder="Enter paragraph"
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
                  Current Price
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
            <div className="mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10">
              <h3 className="pb-2 font-bold leading-tight text-dark dark:text-body-color-dark">
                Image
              </h3>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                placeholder="Enter image"
                accept="image/*"
                className="w-full border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
            <div className="flex flex-row items-center justify-end space-x-2">
              <button
                onClick={onSave}
                className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
              >
                &nbsp;&nbsp;Save&nbsp;&nbsp;
              </button>
              <button
                onClick={onCancel}
                className="rounded-lg bg-amber-500 px-7 py-3 text-base flex items-center justify-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60"
              > 
                &nbsp;Cancel&nbsp;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
