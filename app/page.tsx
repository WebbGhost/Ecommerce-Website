import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import styles from "./page.module.css";
import ListsProducts from "@/components/ListsProducts";

const inter = Inter({ subsets: ["latin"] });
const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products`);
};
export default function Home() {
  const products = getProducts();
  return (
    <main className={styles.main}>
      <ListsProducts products={products} />
    </main>
  );
}
