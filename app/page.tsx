import { Inter } from "next/font/google";
import axios from "axios";
import queryString from "query-string";

import ListsProducts, { Product } from "@/components/product/ListsProducts";
import Filters from "@/components/layout/FilterProducts";

const inter = Inter({ subsets: ["latin"] });

interface FetchProductResponse {
  status: string;
  results: number;
  product: Product[];
  resPerPage: number;
  productsCount: number;
}
const getProducts = async (searchParams: any) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get<FetchProductResponse>(
    `${process.env.API_URL}/api/products?${searchQuery}`
  );
  return data;
};
export default async function Home({ searchParams }: any) {
  const { product, resPerPage, productsCount } = await getProducts(
    searchParams
  );

  return (
    <main className="flex flex-row">
      <Filters />
      <ListsProducts
        product={product}
        resPerPage={resPerPage}
        productCount={productsCount}
      />
    </main>
  );
}
