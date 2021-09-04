import React from "react";
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Mandeep"}
        lastName={"kaur"}
        age={25}
        hair={"black"}
      />
      <PersonCard
        firstName={"Amandeep"}
        lastName={"kaur"}
        age={23}
        hair={"dark brown"}
      />
      <PersonCard
        firstName={"Jasvir"}
        lastName={"singh"}
        age={50}
        hair={"black"}
      />
    </div>
  );
}

export default App;
