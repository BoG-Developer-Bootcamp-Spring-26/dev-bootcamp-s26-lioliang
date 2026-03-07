import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

const url = "https://pokeapi.co/api/v2/pokemon"



  

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [dexNumber, setDexNumber] = useState(1);
  
  useEffect(() => {
    const getPokemonJSON = async () => {
      try {
          const response = await fetch(`${url}/${dexNumber}`); //A string template literal; basically a more readable way to put variables in a string
          const pokemonJSON = await response.json();

          setPokemon(pokemonJSON);
          return pokemonJSON;
      } catch(e) {
          throw e;
      }
    }
    getPokemonJSON();
  }, [dexNumber]);

  if (!pokemon) return <div><p>Loading...</p></div>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={pokemon.sprites.front_default}></img>
        <p>{pokemon.name}
        </p>
        <div className = "arrows">
          <button onClick={() => setDexNumber(dexNumber-1)}>left</button>
          <button onClick={() => setDexNumber(dexNumber+1)}>right</button>
        </div>
      </header>
    </div>
  );
}

export default App;
