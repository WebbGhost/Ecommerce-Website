import React from "react";
import ProductItem from "./ProductsItem";

export interface Product {
  name: string;
  _id: string;
}
export type ProductsProps = {
  product: Product[];
};

const ListsProducts = ({ product }: Product[]) => {
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
