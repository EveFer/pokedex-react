import React, {Component} from 'react';
import logo from './assessts/pokemon_logo.png';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import RegionsWrapper from './components/RegionsWrapper'
import PokemonsWrapper from './components/PokemonsWrapper'

class App extends Component {
  constructor() {
    super()
    this.state = {
      regionDex: [],
      selectedPokemon: {}
    }
  }

  clickHandler = (event) => {
    this.setState({text: event.target.getAttribute('data-region-name')})
    this.getRegionData(event.target.getAttribute('data-region-url'))
  }

  pokemonButttonHandler = (event) => {
    this.getPokemonByUrl(event.target.getAttribute('data-poke-url'))
  }

  async getRegionData(regionURL) {
      const response = await fetch(regionURL) // para obtener si la peticion es correcta
      console.log(response)
      const jsonBody = await response.json() // extrae la informacion
      console.log(jsonBody)
      this.setState({regionDex: jsonBody.pokemon_entries})
  }

  async getPokemonByUrl(pokeUrl) {
    const response = await fetch(pokeUrl) // para obtener si la peticion es correcta
    console.log(response)
    const jsonBody = await response.json() // extrae la informacion
    console.log(jsonBody)
    this.setState({selectedPokemon: jsonBody})
  }

  render() {
    return (
      <>
        <img className="w-50 mx-auto d-block" src={logo} alt=""/>
        <RegionsWrapper handler={this.clickHandler}/>
        <div className="container">
          <div className="row">
            <div className="col-8">
                <h2>Lista de Pokemons de {this.state.text}</h2>
                <div className="row">
                  {
                    this.state.regionDex.length != 0 ? this.state.regionDex.map((pokemon, index) => {return <PokemonsWrapper key={index} pokeurl={pokemon.pokemon_species.url} handler={this.pokemonButttonHandler} pokename={pokemon.pokemon_species.name}/>})  : null
                  }
                </div>


            </div>
            {
              this.state.selectedPokemon ? (
                <div className="col-4">
                  <h2>Detalles</h2>
                  <img src={``} alt=""/>
                  <p>{this.state.selectedPokemon.name}</p>
                </div>
              ) : null
            }
            
          </div>
        </div>
      </>
    );
  }
}

export default App;
