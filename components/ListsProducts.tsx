import React from "react";

interface Product {
  name: string;
}
type Props = {
  products: Product[];
};

const ListsProducts = ({ products }: Props) => {
  return <div>ListsProducts</div>;
};

export default ListsProducts;
