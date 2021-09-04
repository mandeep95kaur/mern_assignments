import React from "react";

const PersonCard = (props) => {
  return (
    <div className="container">
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {hair}</p>
    </div>
  );
}

export default PersonCard;