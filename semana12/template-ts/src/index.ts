//Exercício 1
//a) Seria possível imprimir a senha se criarmos um get para ela ou deixarmos pública.
//b) Apareceu apenas 1 vez.

//Exercício 2
//a) Apareceu apenas 1 vez.
//b) Apareceu 2 vezes.

//Exercício 3
//a) Em um primeiro momento não seri possível, pois a classe pai está com a senha privada e nao tem um metodo de leitura.

//Exercício 4
// Feito

//Exercício 5
// Feito

//Exercício 6
//a) 3 vezes
//b) Nome, id, email, data de admissão, salário base, apresentação

//Exercício 7
//Feito!

//Exercício 8
//a)Todos os parametros da classe Employee.
//b) Foi possível imprimir todas as informações.

//Exercício 9
//a)Não foi possível imprimir, pois o valor é privado. 

import {User} from './user';
import {Customer} from './Customer';
import {Employee} from './Employee';
import {Seller} from './Seller';

type person = {
  name: string
}

function createPerson(name: string): person {
	return {name: name} 
} 

const hyago: User = new User("1", "hyago@gmail.com", "Hyago", "123")

const myPerson2 = createPerson("Robson");

// console.log(hyago.getId(), hyago.getEmail(), hyago.getName());

const airton: Customer = new Customer("2", "airton@gmail.com", "Airton", "123", "1111.1111.1111.1111");

// console.log(
//           `Id: ${airton.getId()},
//           Nome: ${airton.getName()},
//           Email: ${airton.getEmail()},
//           Compra total: ${airton.purchaseTotal},
//           Cartão de crédito: ${airton.getCreditCard()},
//           Apresentação: ${airton.introduceYourself()}`
//         )

const joao: Employee = new Employee("3", "joao@gmail.com", "João", "123", "02/10/2020", 900)

// console.log(
//   `Id: ${joao.getId()},
//   Nome: ${joao.getName()},
//   Email: ${joao.getEmail()},
//   Data admissão: ${joao.getAdmissionDate()},
//   Salário base: ${joao.getBaseSalary()},
//   Apresentação: ${joao.introduceYourself()}
//   Salário total: R$ ${joao.calculateTotalSalary()}`
// )

// const ribeiro: Seller = new Seller("4", "ribeiro@gmail.com", "Ribeiro", "123", "02/10/2020", 800);

// ribeiro.setSalesQuantity(3);

// console.log(
//   `Id: ${ribeiro.getId()}
//   Nome: ${ribeiro.getName()}
//   Email: ${ribeiro.getEmail()}
//   Data admissão: ${ribeiro.getAdmissionDate()}
//   Salário base: ${ribeiro.getBaseSalary()}
//   Apresentação: ${ribeiro.introduceYourself()}
//   Salário total: R$ ${ribeiro.calculateTotalSalary()}`
// )

//Exercício 10
//a)

const daniela: Seller = new Seller("5", "daniela@gmail.com", "Daniela", "123", "20/10/2020", 800);
daniela.setSalesQuantity(30);

console.log(
    `Id: ${daniela.getId()}
    Nome: ${daniela.getName()}
    Email: ${daniela.getEmail()}
    Data admissão: ${daniela.getAdmissionDate()}
    Salário base: ${daniela.getBaseSalary()}
    Apresentação: ${daniela.introduceYourself()}
    Salário total: R$ ${daniela.calculateTotalSalary()}`
  )