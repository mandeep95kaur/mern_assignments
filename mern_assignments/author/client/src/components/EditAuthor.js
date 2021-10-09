import React, { useState, useEffect } from "React";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import Header from "./Header";

const EditAuthor = (props) => {
  const [id] = props;
  const [errors, setErrors] = useState([]);
  const [updatingAuthor, setUpdatingAuthor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/${id}")
      .then((response) => {
        console.log(response.data);
        setUpdatingAuthor(response.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [id]);

  const onChangerHandler = (e) => {
    let newStateObject = { ...updatingAuthor };
    newStateObject[e.target.name] = e.target.value;
    setUpdatingAuthor(newStateObject);
  };

  const updateSubmitHandler = (e) => {
    e.preventFault();
    axios
      .put("http://localhost:8000/api/authors/${id}", updatingAuthor)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <Header link={"/"} linkText="Home" subText="Edit this Author:" />
      <form onSubmit={updateSubmitHandler}>
        <label>Name:</label>
        <input
          onChange={onChangerHandler}
          name="authorName"
          value={updatingAuthor.authorName}
        />
        {errors.authorName.message ? (
          <span>{errors.authorName.message}</span>
        ) : null}
        <button>Submit</button>
        <button onClick={(e) => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};
export default EditAuthor;
