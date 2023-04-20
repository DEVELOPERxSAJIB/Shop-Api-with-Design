import express from "express";
import {
  createProductTags,
  deleteProductTag,
  getAllProductTags,
  getSingleProductTag,
  updateProductTag,
  updateTagStatus
} from "../controllers/productTagController.js";

// create router
const router = express.Router();

// routes
router.route("/tag").get(getAllProductTags).post(createProductTags);
router
  .route("/tag/:id")
  .get(getSingleProductTag)
  .delete(deleteProductTag)
  .put(updateProductTag)
  .patch(updateTagStatus)

// export
export default router;
