import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';


export class Type extends React.Component {
    state = {
        pokeType: []
    }

    componentDidUpdate(prevProps) {
      if(prevProps.pokeVamo !== this.props.pokeVamo) {
        this.catchTypePokemon();
      }
    }

    catchTypePokemon = async () => {
        const pokeName = this.props.pokeVamo
        console.log(this.props.pokeVamo)
        try {
          console.log(this.props.pokeVamo)
          const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
          this.setState({pokeType: response.data.types})
        } catch (erro) {
          console.log(erro.message);
        }
    
      };

    render(){
        return(
          <div>
            <h4>Tipo:</h4>
            <p>
              {this.state.pokeType.map(types => {
                return <> {types.type.name}</>
          
              })}
            </p>
          </div>
        );
    }
}

export default Type;