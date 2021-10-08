const ProductController = require("../controllers/products.controller");

module.exports = (app) => {
  app.post("/api/products", ProductController.addNewProduct);
  app.get("/api/products", ProductController.getAllProducts);
  app.get("/api/products/:_id", ProductController.getProductById);
};
