const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.post("/products", productController.addProduct);

router.get("/products", productController.getProducts);

router.get("/products/search", productController.searchProduct);

router.get("/products/category", productController.filterCategory);

router.get("/search", productController.searchProduct);

router.get("/category", productController.filterCategory);

router.get("/products/:id", productController.getProductById);

router.put("/products/:id", productController.updateProduct);

router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
