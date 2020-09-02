import { Client } from "./Client";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ResidenceClient } from "./ResidenceClient";
import { ClientManager } from "./ClientManager";
import { ComercialClient } from './ComercialClient';
import { IndustrialClient } from "./IndustrialClient";

//Exercício 1
//a) Consegui imprimir todas informações ao instanciar a classe que implementa a interface Client ou utilizando em um objeto.

//Exercício 2
//a) Informa que não pode instanciar uma classe abstrata.
//b) Nesse primeiro momento só precisamos instanciar ela normalmente.

// const joao: Client = {
//   name: "pedro",
//   registrationNumber: 1,
//   consumedEnergy:30,

//   calculateBill: () => {
//       return 30
//   }
// }

// console.log(joao.name, joao.consumedEnergy, joao.calculateBill())

//Exercício 3

const residence: Residence = new Residence(5, "91310-020");
const commerce: Commerce = new Commerce(6, "11111-111");
const industry: Industry = new Industry(10, "22222-222");

console.log(`
      Residencia: ${residence.getCep()}
      Commercio: ${commerce.getCep()}
      Industria: ${industry.getCep()}
`)

//Exercício 4
//a) Essa classe possui metodos getCpf, calculateBill, getResidentsQuantity, getCep
//e as propriedade, name, registrationNumber, consumedEnergy, cpf, residentsQuantity


// const airtonHouse: ResidenceClient = new ResidenceClient("Airton", 29, 20, "111.111.111.11", 2, "91310-020");

// console.log(airtonHouse.calculateBill())

//Exercício 5
//a) Ela reaproveita o codigo da implementação Client e compartilha das funcionalidades, assim como o cep de Place.
//b) O cnpj o get dessa informação e os dados de retorno da calculateBill, além da floorsQuantity.


//Exercício 6 
//a) Da classe Industry, pois ela tem as informações pertinentes ao cliente industrial, como a quantidade de máquinas para calcular a conta.
//b) De Client, pois é um cliente industrial e precisa ter nome, quantidade consumo, numero de registro, etc.
//c) Por que não precisamos realizar alterações dentro dela, em um primeiro momento. 


const clientManager = new ClientManager();

const airtonHouse: ResidenceClient = new ResidenceClient("Airton", 29, 20, "111.111.111.11", 2, "91310-020");
clientManager.registerClient(airtonHouse)

const predioDoAirton: ComercialClient = new ComercialClient("Airton Company", 28, 50, "222.222.222.22", 6, "12312-123");
clientManager.registerClient(predioDoAirton)

const industriasAirton: IndustrialClient = new IndustrialClient("Airton Regeneration", 30, 120, "333.333.333.33", 8, "32132-321");
clientManager.registerClient(industriasAirton)

console.log("vai pagar ", clientManager.payClient(29))

clientManager.deleteUser(29)

console.log("total que a empresa de luz recebe", clientManager.calculateTotalReceive());
