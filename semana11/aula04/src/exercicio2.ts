import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//Exercício 2
//a)A função nomeada nós utilizamos com o async na frente, não chamamos o function.
//b)
type sub = {
    id: string,
    name: string,
    email: string
}

const main = async () => {
    const getAllSubs = async():Promise<sub[]> => {
        const users = await axios.get(`${baseUrl}/subscribers/all`)
        return users.data;
    }

    console.log(await getAllSubs())
};

main()

