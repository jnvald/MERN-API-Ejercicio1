import React, {useState} from 'react';
import './App.css';
import ApiPokemon from './components/ApiPokemon';
import {Formulario, Boton} from './components/FormularioStyle';


function App() {

  const [state, setState] = useState(0);

  const onClick = () => {
    console.log("Hello")
    fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setState({
                    people: response.results
                })
            })
            .catch(error => {
              return console.log(error)
            })
  }


  return ( 
    <Formulario>
      <Boton
          type="button"
          onClick={onClick}
          className="button"
          >Fetch Pokémon</Boton>
      
          <ApiPokemon state={state}/>
        
    </Formulario>
  );
}

export default App;
