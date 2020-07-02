import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';


export class Type extends React.Component {
    state = {
        pokeType: ""
    }

    componentWillReceiveProps = () => {
      this.catchTypePokemon();

    }

    catchTypePokemon = async () => {
        const pokeName = this.props.pokeVamo
        console.log(this.props.pokeVamo)
        try {
          console.log(this.props.pokeVamo)
          const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
          this.setState({pokeType: response.data.types[0].type.name})
          console.log(response.data.types[0].type.name)
        } catch (erro) {
          console.log(erro.message);
        }
    
      };

    render(){
        return(
            <p>Tipo: {this.state.pokeType}</p>
        );
    }
}

export default Type;