import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import Header from "./Header";

const AllAuthor = (props) => {
  const [authorList, setAuthorList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((response) => {
        console.log(response.data);
        setAuthorList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteHandler = (id) => {
    axios
      .delete("http://localhost:8000/api/authors/${id}")
      .then((response) => {
        console.log(response.data);
        setAuthorList(authorList.filter((author) => author._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header
        link={"/new"}
        linkText="Add an Author"
        subText="He have quotes by:"
      />
      <table style={{ margin: "Auto", border: "1px solid black" }}>
        <thead style={{ backgroundColor: "lightgray", color: "white" }}>
          <tr>
            <th>Author</th>
            <th>Action available</th>
          </tr>
        </thead>
        <tbody>
          {authorList
            ? authorList.map((author, index) => (
                <tr key={index}>
                  <td>{author.authorName}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate("/edit/{author._id}");
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={(e) => deleteHandler(author._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};
export default AllAuthor;
