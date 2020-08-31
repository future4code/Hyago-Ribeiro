import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//Exercício 1
//a)O endepoint de pegar todos os usuários, do tipo get.
//b)Promise<any[]>
//c)
type sub = {
    id: string,
    name: string,
    email: string
}

const arraySubs: sub[] = [];

async function getAllSubs(): Promise<sub[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    console.log(users.data)
    return users.data;
}

// const main = async () => {
//         console.log(getAllSubs())
// };

getAllSubs()

