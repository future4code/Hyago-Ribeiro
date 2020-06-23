import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    const saveTarefas = {
      tarefas: this.state.tarefas,
      inputValue: this.state.inputValue,
      filter: this.state.filter
    };

    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {

    const tarefaString = localStorage.getItem("tarefas");

    const tarefaObjeto = JSON.parse(tarefaString);

    console.log(tarefaObjeto);

    this.setState({tarefas: tarefaObjeto})

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    };

    const arrayNovasTarefas = [novaTarefa, ...this.state.tarefas];

    this.setState ({tarefas: arrayNovasTarefas});

  };

  removerTarefa = (id) => {
    const arrayRemover = this.state.tarefas.filter(tarefa => {
      return tarefa.id !== id
    });

    this.setState ({tarefas: arrayRemover})
  }

  selectTarefa = (id) => {

    const novoArrayDeTarefas = this.state.tarefas.map(pessoa => {
      if(pessoa.id === id){
         const tarefaDiferente = {
           ...pessoa,
           completa: !pessoa.completa
         }
         return tarefaDiferente
      } else {
        return pessoa
      }

    });


    console.log(novoArrayDeTarefas)

    this.setState({tarefas: novoArrayDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState ({filter: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                onDoubleClick={() => this.removerTarefa(tarefa.id)}
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
