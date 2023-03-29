import Product from "../models/product";
import { Request, Response, NextFunction } from "express";
import APIFilters from "../utils/ApiFeatures";
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
  const resPerPage = 3;
  const productsCount = await Product.countDocuments();

  const apiFilters = new APIFilters(Product.find(), req.query)
    .search()
    .filter();

  let product = await apiFilters.query;
  const filteredProductsCount = product.length;

  apiFilters.pagination(resPerPage);

  product = await apiFilters.query.clone();

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
