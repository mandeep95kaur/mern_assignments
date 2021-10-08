const Product = require("../models/product.model");

const addNewProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => console.log(err));
};

module.exports = {
  addNewProduct,
};
