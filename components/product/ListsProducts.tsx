import React, { FC } from "react";
import ProductItem from "./ProductsItem";
import Pagination from "../layout/Pagination";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  seller: string;
  stocks: number;
  rating: number;
  reviews?: [string];
  images?: [string];
}
export type ProductsProps = {
  product: Product[];
  resPerPage: number;
  productCount: number;
};

const ListsProducts: FC<ProductsProps> = ({
  product,
  resPerPage,
  productCount,
}) => {
  console.log(product);
  return (
    <div>
      {product.map((product: Product) => (
        <>
          <li key={product._id}>{product.name}</li>
          <ProductItem product={product} />
        </>
      ))}
      <Pagination productCount={productCount} resPerPage={resPerPage} />
    </div>
  );
};

export default ListsProducts;
