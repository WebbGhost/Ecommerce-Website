import React, { FC } from "react";
import ProductItem from "./ProductsItem";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  seller: string;
  stocks: number;
  rating: number;
  reviews: [string];
  images: [string];
}
export type ProductsProps = {
  product: Product[];
};

const ListsProducts: FC<ProductsProps> = ({ product }) => {
  console.log(product);
  return (
    <div>
      {product.map((product: Product) => (
        <>
          <li key={product._id}>{product.name}</li>
          <ProductItem product={product} />
        </>
      ))}
    </div>
  );
};

export default ListsProducts;
