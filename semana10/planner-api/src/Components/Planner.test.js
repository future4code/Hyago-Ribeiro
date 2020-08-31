import React, { useEffect } from "react";
import {
  render,
  wait
} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Planner from "./Planner";
import axios from 'axios'

axios.get = jest.fn().mockResolvedValue({
    data: []
})

axios.post = jest.fn().mockResolvedValue()

axios.put = jest.fn().mockResolvedValue()

axios.delete = jest.fn().mockResolvedValue()

describe('Rendenização do planner de tarefas', () => {
    test('Teste da rendenização inicial dos elementos', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "segunda",
                text: "Comprar pão",
                completa: false,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })

        const {getByPlaceholderText, getByText, findByText} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText("Criar tarefa!")
        expect(button).toBeInTheDocument()

        const task = await findByText("Comprar pão")
        expect(task).toBeInTheDocument()
        
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago')
    })
})

describe('Adicionar uma nova tarefa', () => {
    test('verificar input digitavel', async () => {
        const {getByPlaceholderText} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        await userEvent.type(input, 'tarefa teste segunda')

        expect(input).toBeInTheDocument(/tarefa teste segunda/i)

    })
    test('Adicionar uma task na segunda-feira', async () => {
        axios.post = jest.fn().mockResolvedValue()
        axios.get = jest.fn().mockResolvedValue({
            data:[]
        })

        const {getByPlaceholderText, getByText, getByTitle} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText('Criar tarefa!')
        expect(button).toBeInTheDocument()

        await userEvent.type(input, 'tarefa teste segunda')

        const daySelect = getByTitle("days-week");

        userEvent.selectOptions(daySelect, "segunda");

        userEvent.click(button)

        
        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago', {
            text: 'tarefa teste segunda',
            day: 'segunda',
            completa: false
        })
        
        axios.get = jest.fn().mockResolvedValue({
            data:[{
                day: "segunda",
                text: "tarefa teste segunda",
                completa: false,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })
        
        await wait(() => {
            expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago')
            
            const taskOnScreen = getByText("tarefa teste segunda");
            
            expect(taskOnScreen).toBeInTheDocument()
        })
    })

    test('Adicionar uma task na terça-feira', async () => {
        axios.post = jest.fn().mockResolvedValue()
        axios.get = jest.fn().mockResolvedValue({
            data:[]
        })

        const {getByPlaceholderText, getByText, getByTitle} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText('Criar tarefa!')
        expect(button).toBeInTheDocument()

        await userEvent.type(input, 'tarefa teste terça')

        const daySelect = getByTitle("days-week");

        userEvent.selectOptions(daySelect, "terca");

        userEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago', {
            text: 'tarefa teste terça',
            day: 'terca',
            completa: false
        })
        
        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })

    test('Adicionar uma task na quarta-feira', async () => {
        axios.post = jest.fn().mockResolvedValue()
        axios.get = jest.fn().mockResolvedValue({
            data:[]
        })

        const {getByPlaceholderText, getByText, getByTitle} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText('Criar tarefa!')
        expect(button).toBeInTheDocument()

        await userEvent.type(input, 'tarefa teste quarta')

        const daySelect = getByTitle("days-week");

        userEvent.selectOptions(daySelect, "quarta");

        userEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago', {
            text: 'tarefa teste quarta',
            day: 'quarta',
            completa: false
        })
        
        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })

    test('Adicionar uma task na quinta-feira', async () => {
        axios.post = jest.fn().mockResolvedValue()
        axios.get = jest.fn().mockResolvedValue({
            data:[]
        })

        const {getByPlaceholderText, getByText, getByTitle} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText('Criar tarefa!')
        expect(button).toBeInTheDocument()

        await userEvent.type(input, 'tarefa teste quinta')

        const daySelect = getByTitle("days-week");

        userEvent.selectOptions(daySelect, "quinta");

        userEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago', {
            text: 'tarefa teste quinta',
            day: 'quinta',
            completa: false
        })
        
        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })

    test('Adicionar uma task na sexta-feira', async () => {
        axios.post = jest.fn().mockResolvedValue()
        axios.get = jest.fn().mockResolvedValue({
            data:[]
        })

        const {getByPlaceholderText, getByText, getByTitle} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText('Criar tarefa!')
        expect(button).toBeInTheDocument()

        await userEvent.type(input, 'tarefa teste sexta')

        const daySelect = getByTitle("days-week");

        userEvent.selectOptions(daySelect, "sexta");

        userEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago', {
            text: 'tarefa teste sexta',
            day: 'sexta',
            completa: false
        })
        
        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })

    test('Adicionar uma task na sábado', async () => {
        axios.post = jest.fn().mockResolvedValue()
        axios.get = jest.fn().mockResolvedValue({
            data:[]
        })

        const {getByPlaceholderText, getByText, getByTitle} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText('Criar tarefa!')
        expect(button).toBeInTheDocument()

        await userEvent.type(input, 'tarefa teste sábado')

        const daySelect = getByTitle("days-week");

        userEvent.selectOptions(daySelect, "sabado");

        userEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago', {
            text: 'tarefa teste sábado',
            day: 'sabado',
            completa: false
        })
        
        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })

    test('Adicionar uma task na domingo', async () => {
        axios.post = jest.fn().mockResolvedValue()
        axios.get = jest.fn().mockResolvedValue({
            data:[]
        })

        const {getByPlaceholderText, getByText, getByTitle} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText('Criar tarefa!')
        expect(button).toBeInTheDocument()

        await userEvent.type(input, 'tarefa teste domingo')

        const daySelect = getByTitle("days-week");

        userEvent.selectOptions(daySelect, "domingo");

        userEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago', {
            text: 'tarefa teste domingo',
            day: 'domingo',
            completa: false
        })
        
        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })
})

describe('Verificar se as tarefa são completadas', () => {
    test('Testa completar tarefa', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "segunda",
                text: "Comprar pão",
                completa: false,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })

        axios.put = jest.fn().mockResolvedValue()

        const {getByPlaceholderText, getByText, findByText} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText('Criar tarefa!')
        expect(button).toBeInTheDocument()

        const taskTest = await findByText(/Comprar pão/i)
        expect(taskTest).toBeInTheDocument()

        userEvent.click(taskTest)

        expect(axios.put).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago/PrDpHYIZsNFYG4XeAd3v', {
            completa: true
        })

        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "segunda",
                text: "Comprar pão",
                completa: true,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })

        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(1)
            expect(taskTest).toHaveStyle('text-decoration: line-through')
        })
    })

    test('Testa tarefa incompleta', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "segunda",
                text: "Comprar pão",
                completa: true,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })

        axios.put = jest.fn().mockResolvedValue()

        const {getByPlaceholderText, getByText, findByText} = render(<Planner/>)

        const input = getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const button = getByText('Criar tarefa!')
        expect(button).toBeInTheDocument()

        const taskTest = await findByText(/Comprar pão/i)
        expect(taskTest).toBeInTheDocument()

        userEvent.click(taskTest)

        expect(axios.put).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-hyago/PrDpHYIZsNFYG4XeAd3v', {
            completa: false
        })

        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })
})

describe('Deletar tarefa', () => {
    test('Deletar tarefa segunda', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "segunda",
                text: "Comprar pão",
                completa: true,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })

        axios.delete = jest.fn().mockResolvedValue()
        
        const {findByTitle, findByText} = render(<Planner/>)
        
        const taskTest = await findByText(/Comprar pão/i)
        expect(taskTest).toBeInTheDocument()
        
        userEvent.click(taskTest)
        
        const buttonDelete = await findByTitle("deletar-task")
        expect(buttonDelete).toBeInTheDocument()
        userEvent.click(buttonDelete)

        expect(axios.delete).toHaveBeenCalledTimes(1)
    })

    test('Deletar tarefa terça', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "terca",
                text: "Comprar pão",
                completa: true,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })
        
        axios.delete = jest.fn().mockResolvedValue()
        
        const {findByTitle, findByText} = render(<Planner/>)
        
        const taskTest = await findByText(/Comprar pão/i)
        expect(taskTest).toBeInTheDocument()
        
        userEvent.click(taskTest)
        
        const buttonDelete = await findByTitle("deletar-task")
        expect(buttonDelete).toBeInTheDocument()
        userEvent.click(buttonDelete)

        expect(axios.delete).toHaveBeenCalledTimes(1)
    })

    test('Deletar tarefa quarta', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "quarta",
                text: "Comprar pão",
                completa: true,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })
        
        axios.delete = jest.fn().mockResolvedValue()
        
        const {findByTitle, findByText} = render(<Planner/>)
        
        const taskTest = await findByText(/Comprar pão/i)
        expect(taskTest).toBeInTheDocument()
        
        userEvent.click(taskTest)
        
        const buttonDelete = await findByTitle("deletar-task")
        expect(buttonDelete).toBeInTheDocument()
        userEvent.click(buttonDelete)

        expect(axios.delete).toHaveBeenCalledTimes(1)
    })

    test('Deletar tarefa quinta', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "quinta",
                text: "Comprar pão",
                completa: true,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })
        
        axios.delete = jest.fn().mockResolvedValue()
        
        const {findByTitle, findByText} = render(<Planner/>)
        
        const taskTest = await findByText(/Comprar pão/i)
        expect(taskTest).toBeInTheDocument()
        
        userEvent.click(taskTest)
        
        const buttonDelete = await findByTitle("deletar-task")
        expect(buttonDelete).toBeInTheDocument()
        userEvent.click(buttonDelete)

        expect(axios.delete).toHaveBeenCalledTimes(1)
    })
    test('Deletar tarefa sexta', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "sexta",
                text: "Comprar pão",
                completa: true,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })
        
        axios.delete = jest.fn().mockResolvedValue()
        
        const {findByTitle, findByText} = render(<Planner/>)
        
        const taskTest = await findByText(/Comprar pão/i)
        expect(taskTest).toBeInTheDocument()
        
        userEvent.click(taskTest)
        
        const buttonDelete = await findByTitle("deletar-task")
        expect(buttonDelete).toBeInTheDocument()
        userEvent.click(buttonDelete)

        expect(axios.delete).toHaveBeenCalledTimes(1)
    })
    test('Deletar tarefa sábado', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "sabado",
                text: "Comprar pão",
                completa: true,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })
        
        axios.delete = jest.fn().mockResolvedValue()
        
        const {findByTitle, findByText} = render(<Planner/>)
        
        const taskTest = await findByText(/Comprar pão/i)
        expect(taskTest).toBeInTheDocument()
        
        userEvent.click(taskTest)
        
        const buttonDelete = await findByTitle("deletar-task")
        expect(buttonDelete).toBeInTheDocument()
        userEvent.click(buttonDelete)

        expect(axios.delete).toHaveBeenCalledTimes(1)
    })
    test('Deletar tarefa domingo', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: "domingo",
                text: "Comprar pão",
                completa: true,
                id: "PrDpHYIZsNFYG4XeAd3v"
            }]
        })
        
        axios.delete = jest.fn().mockResolvedValue()
        
        const {findByTitle, findByText} = render(<Planner/>)
        
        const taskTest = await findByText(/Comprar pão/i)
        expect(taskTest).toBeInTheDocument()
        
        userEvent.click(taskTest)
        
        const buttonDelete = await findByTitle("deletar-task")
        expect(buttonDelete).toBeInTheDocument()
        userEvent.click(buttonDelete)

        expect(axios.delete).toHaveBeenCalledTimes(1)
    })
})