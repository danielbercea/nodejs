import express from "express";
import ProductsService from "../../models/products.js";

const router = express.Router();

/* GET localhost:3000/api/products */
router.get("/", async (req, res, next) => {
  try {
    const products = await ProductsService.listProducts();

    res
      .status(200)
      .json({ message: "Lista a fost returnata cu succes", data: products });
  } catch (error) {
    res.status(200).json({ message: `${error}` });
  }
});

/* GET localhost:3000/api/products/:id */
router.get("/:id", async (req, res, next) => {
  try {
    const product = await ProductsService.getProductsById(req.params.id);

    if (!product) {
      throw new Error("Produsul nu a fost gasi");
    }

    res.json({ message: "Produsul a fost returnat cu succes", data: product });
  } catch (error) {
    res.json({ message: `${error}` });
  }
});

/* POST localhost:3000/api/products/ */
router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

/* DELETE localhost:3000/api/products/:id */
router.delete("/:id", async (req, res, next) => {
  res.json({ message: "template message" });
});

/* PUT localhost:3000/api/products/:id */
router.put("/:id", async (req, res, next) => {
  res.json({ message: "template message" });
});

export default router;
