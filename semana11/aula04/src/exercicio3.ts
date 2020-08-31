import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//Exercício 2
//a)Teremos um erro porque não foi criada a tipagem ainda e o código não sabe reconhecer.
//b)Passamos como Promise<any> para tipar que pode ser qualquer coisa que venha, para podermos identificar o que virá.
//c)
type sub = {
    id: string,
    name: string,
    email: string
}

const main = async () => {
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

    console.log(await getAllSubs())
};

main()

