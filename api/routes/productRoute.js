import express from "express";
import {
  createProducts,
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct
} from "../controllers/productController.js";
import { productMulter } from "../utils/multer.js";

// create router
const router = express.Router();

// routes
router.route("/").get(getAllProducts).post(productMulter, createProducts);
router.get("/:slug", getSingleProduct);
router.delete("/:id", deleteSingleProduct);
router.put("/:id", productMulter, updateSingleProduct);

// export
export default router;
