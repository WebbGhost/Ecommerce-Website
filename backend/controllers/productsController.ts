import Product from "../models/product";
import { Request, Response, NextFunction } from "express";
export const CreateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    status: "Success",
    results: product.length,
    product,
  });
};
export const GetAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = await Product.find();
  res.status(200).json({
    status: "Success",
    results: product.length,
    product,
  });
};

export const GetProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = await Product.findById(req.query.id);
  if (!product) return res.status(404).json({ message: "Not Found" });
  res.status(200).json({
    status: "Success",
    product,
  });
};
