"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import StarRatings from "react-star-ratings";
import TopLinks from "../layout/TopLinks";

type Props = {};

const ProductsDetails = ({ product }: Props) => {
  const inStock = product.stocks >= 1;
  const imagesRef = useRef<HTMLImageElement>("");
  const setImagePreview = (url: string) => {
    imagesRef.current.src = url;
  };
  const TOPLINKS = [
    { name: "Home", url: "/" },
    {
      name: `${product.name}`,
      url: `/products/${product._id}`,
    },
  ];
  return (
    <>
      <TopLinks />
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <img
                  src={product?.images[0].url}
                  alt="product image"
                  className="w-full h-full"
                  ref={imagesRef}
                />
              </div>
              <div className="space-x-2 overflow-auto whitespace-nowrap text-center">
                {product.images.map((image, index) => (
                  <a
                    key={index}
                    className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500"
                    onClick={() => setImagePreview(image?.url)}
                  >
                    <Image
                      src={image.url}
                      alt="product image"
                      width="100"
                      height="100"
                    />
                  </a>
                ))}
              </div>
            </aside>
            <main>
              <h2 className="font-semibold text-2xl mb-4">{product.name}</h2>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <div className="ratings">
                  <StarRatings
                    rating={product.rating}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="name"
                  />
                  <span className="text-yellow-500 ml-2">{product.rating}</span>
                  <span className="text-green-500 ml-2">Verified</span>
                </div>
              </div>
              <h1 className="mb-4 text-xl font-semibold">{product.price}$</h1>
              <p className="mb-4 text-gray-400">{product.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                <button className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                  <i className="mr-2">Add To Cart</i>
                </button>
              </div>
              <ul className="mb-5">
                <li className="mb-1">
                  {""}
                  <b className="font-medium w-36 inline-block">stock:</b>
                  {inStock ? (
                    <span className="text-green-500">Instock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </li>
                <li className="mb-1">
                  {""}
                  <b className="font-medium w-36 inline-block">Category:</b>
                  <span className="text-gray-400">{product.category}</span>
                </li>
                <li className="mb-1">
                  {""}
                  <b className="font-medium w-36 inline-block ">
                    Brand/Seller:
                  </b>
                  <span className="text-gray-400">{product.seller}</span>
                </li>
              </ul>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsDetails;
