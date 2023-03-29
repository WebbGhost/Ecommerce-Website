import axios from "axios";
import React from "react";

type Props = {};
const getProductDetails = async (id: Params) => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
  return data?.product;
};

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import ProductsDetails from "@/components/product/ProductsDetails";

const ProductDetails = async ({ params }) => {
  const product = await getProductDetails(params.id);
  console.log(product.name);
  return <ProductsDetails product={product} />;
};

export default ProductDetails;
