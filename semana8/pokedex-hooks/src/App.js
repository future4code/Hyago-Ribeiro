import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PokeCard from "./components/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const handleOnChangePokeName = e => {
    setPokeName(e.target.value);
  }

  return (
    
    <div>
      <select onChange={handleOnChangePokeName}>
        <option value="">Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>

  );
}

export default App;
