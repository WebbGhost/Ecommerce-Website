import { connectDB } from "@/backend/config/dbConnect";
import {
  CreateProduct,
  GetAllProducts,
} from "@/backend/controllers/productsController";
import nc from "next-connect";

const handler = nc();
connectDB();
handler.post(CreateProduct);
handler.get(GetAllProducts);
export default handler;
