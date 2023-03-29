import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import styles from "./page.module.css";
import ListsProducts, {
  Product,
  ProductsProps,
} from "@/components/product/ListsProducts";
import Filters from "@/components/layout/FilterProducts";

const inter = Inter({ subsets: ["latin"] });

interface FetchProductResponse {
  status: string;
  results: number;
  product: Product[];
}
const getProducts = async () => {
  const { data } = await axios.get<FetchProductResponse>(
    `${process.env.API_URL}/api/products`
  );
  return data;
};
export default async function Home() {
  const { product } = await getProducts();

  return (
    <main className="flex flex-row">
      <Filters />
      <ListsProducts product={product} />
    </main>
  );
}
