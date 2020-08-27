import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//Exercício 2
//a)Utilizamos uma função que recebe parametros e gera uma promise. Com o tipo put, realizamos a criação de uma nova notícia.
//b)
type sub = {
    id: string,
    name: string,
    email: string
}

type news = {
    title: string,
    content: string,
    date: number,
}

const addNewUser = async(title: string, content: string, date: number = Date.now()): Promise<void> => {
    try{
        const body: news = {
            title,
            content,
            date
        }
        axios.put(`${baseUrl}/news`, body)
        console.log(`Notícia ${title} criada com sucesso.`)
    } catch(e) {
        console.log(e.response.data)
    }
}

const getAllSubs = async():Promise<sub[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    return users.data.map((use: sub) => {
        return {
            id: use.id,
            name: use.name,
            email: use.email
        }
    })
}

const main = async () => {
    await addNewUser("Turma Turing avança!", "A turma turing da escola Labenu, começou hoje mais uma etapa do curso, o backend.")
    console.log(await getAllSubs())
};

main()

