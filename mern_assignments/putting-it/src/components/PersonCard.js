import React, { useState } from "react";

const PersonCard = (props) => {
  const [birthdayAge, setBirthdayAge] = useState(props.age);

  
  const {firstName, lastName, hair} = props;

  return (
    <div className="container">
      <h2>
        {firstName}, {lastName}
      </h2>
      <p>Age: {birthdayAge}</p>
      <p>Hair Color: {hair}</p>
      <button onClick={() => setBirthdayAge( birthdayAge + 1 )}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
}
export default PersonCard;