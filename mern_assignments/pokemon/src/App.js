import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  // this will run immediately after the JSX is rendered
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // store the json converted data in state so it can be displayed
        setPokemon(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <p style={{ color: "white" }}>Fetch Pokemon:</p>
      <ul>
        {pokemon.map((pokemonObj, index) => {
          return <li key={index}>{pokemonObj.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
