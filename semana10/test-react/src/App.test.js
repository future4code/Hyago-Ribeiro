import React from "react";
import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("É exibido um input e um botão 'adicionar' quando rendeniza a primeira vez", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const botaoAdicionar = getByText(/Adicionar/i);
    const inputPost = getByPlaceholderText(/Novo post/i);

    expect(botaoAdicionar).toBeInTheDocument("Adicionar");
    expect(inputPost).toBeInTheDocument("Novo Post");
})

describe("Funcionalidade de adicionar post", () => {
    test("É adicionado um post quando o botão 'adicionar' é acionado", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
    
        const inputPost = getByPlaceholderText("Novo post")
        fireEvent.change(inputPost, {target: {value:'Teste Post 1'}});
    
        const botaoAdicionar = getByText(/adicionar/i);
        fireEvent.click(botaoAdicionar);
    
        expect(getByText(/Teste Post 1/i)).toBeInTheDocument()
    })
    test("Input é limpado quando adicionado um novo post", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
    
        const inputPost = getByPlaceholderText("Novo post")
        fireEvent.change(inputPost, {target: {value:'Teste Post 1'}});
    
        const botaoAdicionar = getByText(/adicionar/i);
        fireEvent.click(botaoAdicionar);
    
        expect(getByPlaceholderText(/Novo post/i)).toBeInTheDocument()
    })

    test("Quando um novo post é adicionado o contador de post surge como +1", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
    
        const inputPost = getByPlaceholderText("Novo post")
        fireEvent.change(inputPost, {target: {value:'Teste Post 1'}});
    
        const botaoAdicionar = getByText(/adicionar/i);
        fireEvent.click(botaoAdicionar);
    
        expect(getByText(/Quantidade de posts: 1/i)).toBeInTheDocument()
    })

    test("Quando for adicionado 3 posts o contador de post deve contar 3", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
    
        const inputPost = getByPlaceholderText("Novo post")
        fireEvent.change(inputPost, {target: {value:'Teste Post 1'}});
    
        const botaoAdicionar = getByText(/adicionar/i);
        fireEvent.click(botaoAdicionar);

        fireEvent.change(inputPost, {target: {value:'Teste Post 1'}});
        fireEvent.click(botaoAdicionar);

        fireEvent.change(inputPost, {target: {value:'Teste Post 1'}});
        fireEvent.click(botaoAdicionar);
    
        expect(getByText(/Quantidade de posts: 3/i)).toBeInTheDocument()
    })

    test("Quando tentar criar um post vazio, a mensagem de 'Não é possível criar um post vazio' deve ser exibida", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
    
        const inputPost = getByPlaceholderText("Novo post")
        fireEvent.change(inputPost, {target: {value:''}});
    
        const botaoAdicionar = getByText(/adicionar/i);
        fireEvent.click(botaoAdicionar);
    
        expect(getByText(/Não é possível criar um post vazio/i)).toBeInTheDocument()
    })
})

describe("Funcionalidade de curtir e descurtir", () => {
    test("Quando o botão 'curtir' é acionado, ele se torna 'descurtir'", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
    
        const inputPost = getByPlaceholderText("Novo post")
        fireEvent.change(inputPost, {target: {value:'Teste Post 1'}});
    
        const botaoAdicionar = getByText(/adicionar/i);
        fireEvent.click(botaoAdicionar);
    
        const botaoCurtir = getByText(/curtir/i);
        fireEvent.click(botaoCurtir);

        expect(getByText(/Descurtir/i)).toBeInTheDocument()
    })

    test("Quando o botão 'descurtir' é acionado, ele se torna 'curtir'", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
    
        const inputPost = getByPlaceholderText("Novo post")
        fireEvent.change(inputPost, {target: {value:'Teste Post 1'}});
    
        const botaoAdicionar = getByText(/adicionar/i);
        fireEvent.click(botaoAdicionar);
    
        const botaoCurtir = getByText(/curtir/i);
        fireEvent.click(botaoCurtir);

        const botaoDescurtir = getByText(/descurtir/i);
        fireEvent.click(botaoDescurtir);

        expect(getByText(/Curtir/i)).toBeInTheDocument()
    })
})

describe("Funcionalidade para apagar o post", () => {
    test("Quando o botão 'apagar' é acionado, o post deve ser removido", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
    
        const inputPost = getByPlaceholderText("Novo post")
        fireEvent.change(inputPost, {target: {value:'Teste Post 1'}});
    
        const botaoAdicionar = getByText(/adicionar/i);
        fireEvent.click(botaoAdicionar);

        const botaoDeletar = getByText(/Apagar/i);
        fireEvent.click(botaoDeletar);

        expect(getByText(/Nenhum item foi adicionado/i)).toBeInTheDocument()
    })
})
