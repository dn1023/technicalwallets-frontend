'use client';
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Metadata } from "next";

/* export const metadata: Metadata = {
  title: "Product Details Page | ETA-USA",
  description: "This is Product Details Page for ETA-USA",
  // other metadata
}; */

//const ProductDetailsPage = () => {
function ProductDetailsPage({ params }) {

  console.log(params.id);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(process.env.dbHost + '/api/product/individual', {
      method: 'POST',
      body: JSON.stringify({ category: params.id }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          setShow(true);
          setProducts(data);
        }
        else {
          setShow(false);
        }

        //setIsAdmin(data == "Admin Content." ? true : false);
        //console.log(data);
      })
  }, []);

  return (
    <>
    </>
  );
};

export default ProductDetailsPage;
