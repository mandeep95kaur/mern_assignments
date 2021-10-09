import React, { useState, useEffect } from "React";
import { Link } from "@reach/router";
import axios from "axios";
import Header from "./Header";

const NewAuthor = (props) => {
  const [errors, setErrors] = useState([]);
  const [newAuthor, setNewAuthor] = useState([]);

  const onChangerHandler = (e) => {
    let newStateObject = { ...newAuthor };
    newStateObject[e.target.name] = e.target.value;
    setNewAuthor(newStateObject);
  };

  const newSubmitHandler = (e) => {
    e.preventFault();
    axios
      .post("http://localhost:8000/api/authors", newAuthor)
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
      <Header link={"/"} linkText="Home" subText="Add a New Author:" />
      <form onSubmit={newSubmitHandler}>
        <label>Name:</label>
        <input
          onChange={onChangerHandler}
          name="authorName"
          value={newAuthor.authorName}
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
export default NewAuthor;
