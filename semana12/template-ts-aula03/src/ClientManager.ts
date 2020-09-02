import { Client } from "./Client";

export class ClientManager {
    private clients: Client[] = [];


    public getClientsQuantity(): number {
        return this.clients.length;
    }

    public registerClient(newClient: Client): void {
        this.clients.push(newClient)
    }

    public payClient(numberRegistration: number): number {
            const findClient = this.clients.find((client) => {
                return client.registrationNumber === numberRegistration
            })
            
            if(findClient){
                return findClient.calculateBill();
            } else {
                return 0
            }
    }

    public calculateTotalReceive(): number{
        let total: number = 0;
        this.clients.forEach((client) => {
            total += client.calculateBill();
        })
        return total;
    }

    public deleteUser(numberRegistration: number): void{
        const newClients: Client[] = this.clients.filter((client) => {
            return client.registrationNumber !== numberRegistration
        })

        this.clients = newClients;
    }
}