import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Type from './components/Type';

const Container = styled.div `

`;

const SelectPokemon = styled.select `

`;

const PokemonSingle = styled.option `

`;

const ShowPokemon = styled.div `

`;

const PngPoke = styled.img `

`;

export class App extends React.Component {
  state = {
    pokeList: [],
    pokeImage: "",
    pokeSelect: ""
  };

  componentDidMount = () => {
    this.colectionPokemons();
  };

  onChangeSelectPokemon = async (event) => {
    const pokeName = event.target.value;
    this.setState({pokeSelect: event.target.value})

    try {
      
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      this.setState({pokeImage: response.data.sprites.front_default})
    } catch (erro) {
      console.log(erro.message);
    }

  };

  colectionPokemons = async () => {
    try {
      const response = await Axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
      this.setState({pokeList: response.data.results})
    } catch (erro) {
      console.log(erro.message);
    }
  };

  render() {
    return (
      <Container>
        <SelectPokemon onChange={this.onChangeSelectPokemon}>
          <option value={""}>Selecione</option>
            {this.state.pokeList.map(pokemon => {
              return (
                <PokemonSingle key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </PokemonSingle>
              );
            })}
        </SelectPokemon>
        <ShowPokemon>
          {this.state.pokeImage && <PngPoke src={this.state.pokeImage} alt="Pokemon" />}
        </ShowPokemon>
        <Type pokeVamo={this.state.pokeSelect}/>
      </Container>
    );
  }

}

export default App;
