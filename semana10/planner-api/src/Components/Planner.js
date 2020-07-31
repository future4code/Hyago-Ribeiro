import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MenuPlanner = styled.form `
    display: flex;
    justify-content: center;
    margin-top: 25px;
    border-bottom: solid 1px #000;
    padding-bottom: 30px;
        label{
            margin-right: 5px;
        };
        input{
            margin-right: 10px;
        };
        select{
            margin-right: 10px;
        };
        button{
            margin-right: 10px;
        }
`;

const ContainerTasks = styled.main `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
`;

const TaskSingle = styled.div `
    width: 30%;
    max-width: 350px;
    height: 50vh;
    border: 1px dashed #000;
    border-top: none;
    border-bottom: none;
    padding: 15px;
    margin: 5px;
    font-size: 35px;
        li{
            margin-left: 40px;
            font-size: 16px;
        };
        span{
            font-size: 16px;
        };
`;

const TaskLine = styled.li `
    text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`;

function Planner() {
    const [taskName, setTaskName] = useState('');
    const [taskDay, setTaskDay] = useState('');
    const [tasksList, setTasksList] = useState([])


    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = async () => {
        try{
            const response = await axios.get(
                'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago')
            setTasksList(response.data);
        } catch(error) {
            console.log(error.message)
        }
    }

    const handlePostTask = async (event) => {
        event.preventDefault();
        try{
           const body = {
                text: taskName,
                day: taskDay,
                completa: false
            }
            await axios.post(
                'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago',
                body
            )
            getTasks()
        } catch(error) {
            console.log(error.message)
        }
    }

    const handleCompleteTask = async (task) => {
        try{
           const body = {
                completa: !task.completa
            }
            await axios.put(
                `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago/${task.id}`,
                body
            )
            getTasks()
        } catch(error) {
            console.log(error.message)
        }
    }

    const deleteTask = async (task) => {
        try{
            await axios.delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago/${task.id}`)
                getTasks()
        } catch(error) {
            console.log(error.message)
        }
    }

    const handleOnChangeTaskName = (e) => {
        setTaskName(e.target.value)
    }

    const handleOnChangeTaskDay = (e) => {
        setTaskDay(e.target.value)
    }

  return (
    <>
        <MenuPlanner onSubmit={handlePostTask}>
            <label htmlFor="add-task">Nova Tarefa:</label>
            <input placeholder="Nova tarefa" onChange={handleOnChangeTaskName} value={taskName} type="text" name="add-task" />
            <select title="days-week" onChange={handleOnChangeTaskDay} value={taskDay} name="diaSemana">
                <option value="">Selecione um dia</option>
                <option value="segunda">Segunda-Feira</option>
                <option value="terca">Terça-Feira</option>
                <option value="quarta">Quarta-Feira</option>
                <option value="quinta">Quinta-Feira</option>
                <option value="sexta">Sexta-Feira</option>
                <option value="sabado">Sábado</option>
                <option value="domingo">Domingo</option>
            </select>
            <button>Criar tarefa!</button>

        </MenuPlanner>
        
        <ContainerTasks>

            <TaskSingle>
                <p>Segunda</p>
                <ul>
                    {tasksList.map((task) => {
                            if(task.day === 'segunda') {
                                return (
                                    <>
                                    <TaskLine
                                    key={task.id}
                                    onClick={() => handleCompleteTask(task)}
                                    completa={task.completa}>{task.text}</TaskLine>
                                    <button title="deletar-task" onClick={() => deleteTask(task)}>X</button>
                                    </>
                                );
                            }
                    })}
                </ul>
            </TaskSingle>
            <TaskSingle>
                <p>Terça</p>
                <ul>
                {tasksList.map((task) => {
                            if(task.day === 'terca') {
                                return (
                                    <>
                                    <TaskLine
                                    key={task.id}
                                    onClick={() => handleCompleteTask(task)}
                                    completa={task.completa}>{task.text}</TaskLine>
                                    <button title="deletar-task" onClick={() => deleteTask(task)}>X</button>
                                    </>
                                );
                            }
                    })}
                </ul>
            </TaskSingle>
            <TaskSingle>
                <p>Quarta</p>
                <ul>
                {tasksList.map((task) => {
                            if(task.day === 'quarta') {
                                return (
                                    <>
                                    <TaskLine
                                    key={task.id}
                                    onClick={() => handleCompleteTask(task)}
                                    completa={task.completa}>{task.text}</TaskLine>
                                    <button title="deletar-task" onClick={() => deleteTask(task)}>X</button>
                                    </>
                                );
                            }
                    })}
                </ul>
            </TaskSingle>
            <TaskSingle>
                <p>Quinta</p>
                <ul>
                {tasksList.map((task) => {
                            if(task.day === 'quinta') {
                                return (
                                    <>
                                    <TaskLine
                                    key={task.id}
                                    onClick={() => handleCompleteTask(task)}
                                    completa={task.completa}>{task.text}</TaskLine>
                                    <button title="deletar-task" onClick={() => deleteTask(task)}>X</button>
                                    </>
                                );
                            }
                    })}
                </ul>
            </TaskSingle>
            <TaskSingle>
                <p>Sexta</p>
                <ul>
                {tasksList.map((task) => {
                            if(task.day === 'sexta') {
                                return (
                                    <>
                                    <TaskLine
                                    key={task.id}
                                    onClick={() => handleCompleteTask(task)}
                                    completa={task.completa}>{task.text}</TaskLine>
                                    <button title="deletar-task" onClick={() => deleteTask(task)}>X</button>
                                    </>
                                );
                            }
                    })}
                </ul>
            </TaskSingle>
            <TaskSingle>
                <p>Sábado</p>
                <ul>
                {tasksList.map((task) => {
                            if(task.day === 'sabado') {
                                return (
                                    <>
                                    <TaskLine
                                    key={task.id}
                                    onClick={() => handleCompleteTask(task)}
                                    completa={task.completa}>{task.text}</TaskLine>
                                    <button title="deletar-task" onClick={() => deleteTask(task)}>X</button>
                                    </>
                                );
                            }
                    })}
                </ul>
            </TaskSingle>
            <TaskSingle>
                <p>Domingo</p>
                <ul>
                {tasksList.map((task) => {
                            if(task.day === 'domingo') {
                                return (
                                    <>
                                    <TaskLine
                                    key={task.id}
                                    onClick={() => handleCompleteTask(task)}
                                    completa={task.completa}>{task.text}</TaskLine>
                                    <button title="deletar-task" onClick={() => deleteTask(task)}>X</button>
                                    </>
                                );
                            }
                    })}
                </ul>
            </TaskSingle>

        </ContainerTasks>
    </>
  );
}

export default Planner;
