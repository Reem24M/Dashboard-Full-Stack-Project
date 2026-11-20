import express from "express";
import { GetAllProducts,
  GetProductById,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
} from "../controllers/products.controller.js";
const router = express.Router();

router.get("/", GetAllProducts);
router.get("/:id", GetProductById);
router.post("/", CreateProduct);
router.put("/:id", UpdateProduct);
router.delete("/:id", DeleteProduct);

export default router;