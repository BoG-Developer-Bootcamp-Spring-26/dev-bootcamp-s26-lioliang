import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import InfoPanel from './components/InfoPanel';
import Types from './components/Types';

const url = "https://pokeapi.co/api/v2/pokemon"



function App() {
  const [pokemon, setPokemon] = useState(null);
  const [dexNumber, setDexNumber] = useState(1);
  const [panel, setPanel] = useState("Info");
  
  
  const getPokemonJSON = async () => {
      try {
          if (dexNumber < 1 || dexNumber > 1024) {
            setDexNumber(1);
            return;
          }
          const response = await fetch(`${url}/${dexNumber}`); //A string template literal; basically a more readable way to put variables in a string
          const pokemonJSON = await response.json();

          setPokemon(pokemonJSON);
          return pokemonJSON;
      } catch(e) {
          throw e;
      }
    }
    getPokemonJSON();

  if (!pokemon) return <div><p>Loading...</p></div>;

  return (
    <div className="App">
      <h2>Exercise 5 - PokeDex!</h2>
      <div style={{display: "flex", justifyContent: "center"}}>
        
        <div className="box">
          <div className="pokeImage">
            <img src={pokemon.sprites.front_default} style={{transform:'scale(2)'}}></img>
          </div>
          <p className="colorText" style={{backgroundColor:'lightgrey'}}>{pokemon.name}
          </p>
          <Types style={{alignSelf:'start'}} pokemonTypes={pokemon.types}></Types>

          <div className = "arrows">
          <button onClick={() => setDexNumber(dexNumber-1)}>{"<"}</button>
          <button onClick={() => setDexNumber(dexNumber+1)}>{">"}</button>
        </div>

      </div>

        
        <div className="box">
          <InfoPanel pokemon={pokemon} panel={panel}></InfoPanel>
          <div>
            <button style={{backgroundColor: panel==="Info" ? "lightgreen" : "lightgray"}} onClick={() =>setPanel("Info")}>Info</button>
            <button style={{backgroundColor: panel==="Moves" ? "lightgreen" : "lightgray"}} onClick={() =>setPanel("Moves")}>Moves</button>
          </div>
        </div>
        
    </div>
    </div>  
  );
}

export default App;
