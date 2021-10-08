import React, { useEffect, useState } from "react";
import axios from "axios";
const Update = (props) => {
  const { id } = props;
  const [title, settitle] = useState();
  const [price, setprice] = useState();
  const [description, setdescription] = useState();
  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id).then((res) => {
      settitle(res.data.title);
      setprice(res.data.price);
      setdescription(res.data.description);
    });
  }, []);
  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/products/" + id, {
        title,
        price,
        description,
      })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <h1>Update a Product</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Update;
