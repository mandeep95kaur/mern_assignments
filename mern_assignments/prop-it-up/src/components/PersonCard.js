import React from "react";

const PersonCard = (props) => {
  const { firstName, lastName, hair } = props;
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