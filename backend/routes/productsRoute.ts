import { Router } from "express";
import { GetAllProducts } from "../controllers/productsController";

const router = Router();

router.route("/products").get(GetAllProducts);
export default router;
