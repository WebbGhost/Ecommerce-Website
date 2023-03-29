import { connectDB } from "@/backend/config/dbConnect";
import { GetProductById } from "@/backend/controllers/productsController";
import nc from "next-connect";

const handler = nc();
connectDB();
handler.get(GetProductById);
export default handler;
