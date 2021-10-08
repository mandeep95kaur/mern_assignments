import { Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";

const ProductList = (props) => {
  const { hasBeenSubmittedDummy } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, [hasBeenSubmittedDummy]);

  const { removeFromDom } = props;
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => {
        removeFromDom(productId);
      });
  };
  return (
    <>
      <h1>All Products</h1>
      {products.map(
        (product, index) =>
          // <p key={index}>{product.title}</p>
          (
            <div className="form-div" key={index}>
              {" "}
              <Link to={`${product._id}`}>{product.title}</Link>
            </div>
          ) |
          <Link to={"/product/" + product._id + "/edit"}> Edit </Link> |
          (
            <button
              onClick={(e) => {
                deleteProduct(product._id);
              }}
            >
              Delete
            </button>
          )
      )}
    </>
  );
};

export default ProductList;
