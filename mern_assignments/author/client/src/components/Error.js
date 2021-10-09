import React, { useState, useEffect } from "React";
import { Link } from "@reach/router";

const Error = (props) => {
  return (
    <div>
      <p>
        {" "}
        we are sorry , we could not find the author you are looking .would you
        like to add another author to our database?
      </p>
      <Link to={"/new"}>Create an Author</Link>
    </div>
  );
};
export default Error;
