import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//Exercício 7

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

type notification = {
    subscriberId: string,
    message: string
}

const creatNewSub = async(name: string, email: string): Promise<void> => {
    try {
        const body = {
            name,
            email
        }
        await axios.put(`${baseUrl}/subscribers`, body)
        console.log(`O usuário ${name} foi criado com sucesso`);
    } catch(e){
        console.log(e.response.data)
    }
}

const sendNotification = async(subscriber: sub, message: string): Promise<void> => {
    try {
        console.log(`Enviando notificação para ${subscriber.name}`)
        const body: notification = {
            subscriberId: subscriber.id,
            message
        }
        await axios.post(`${baseUrl}/notifications/send`, body)
        console.log(`Notificação enviada para ${subscriber.name}`)
    } catch(e){
        console.log(e.response.data)
    }
}

const addNews = async(title: string, content: string, date: number = Date.now()): Promise<void> => {
    try{
        const body: news = {
            title,
            content,
            date
        }
        axios.put(`${baseUrl}/news`, body)
        console.log(`Notícia ${title} criada com sucesso.`)
        
        const allSubs = await getAllSubs();
        const allPromises = [];

        for(const subSingle of allSubs) {
            allPromises.push(
                sendNotification(subSingle, title)
            )
        }

        await Promise.all(allPromises);
        console.log("Todas notificações enviadas!")
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

const getNotification = async(subscriber: sub):Promise<notification[]> => {
        console.log(`Pegando as notificações de ${subscriber.name}`)
        const notifications = await axios.get(`${baseUrl}/subscribers/${subscriber.id}/notifications/all`);
        return notifications.data.map((notification: any) => {
            return console.log(
                {
                    id: notification.id,
                    subscriberId: notification.subscriberId,
                    message: notification.message
                }
            )
        }) 
}

const main = async () => {

    // await addNews("A noite é uma criança", "A noite é uma criança, vamos comemorar!")
    
    // await creatNewSub("Hyago", "hyago@gmail.com")
    
    const allSubs = await getAllSubs();

    for(const subSingle of allSubs) {
        await getNotification(subSingle)
    }
};

main()

