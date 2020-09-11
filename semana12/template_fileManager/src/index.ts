import {FileManager} from './FileManager';

//a) O construtor serve para criarmos, instanciarmos um objeto. Usamos o new para chamá-lo.
//b)
//c) precisamos criar um getter e um setter para ter acesso as informações privadas.
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    
    public getTransaction(): Transaction[] {
        return this.transactions;
    }
    
    public setTransaction(transaction: Transaction[]) {
        this.transactions = transaction
    }
    
}

  //Exercícios 2-3-4
  class Transaction {
      private date: string;
      private value: number;
      private description: string;
  
      constructor(date: string, value: number, description: string) {
          this.date = date;
          this.value = value;
          this.description = description;
      }
  
      public getTransaction(): any {
              return this.date;
              this.value;
              this.description;
      }
  }
  
  const fileManager: FileManager = new FileManager('accounts.json')
  
  class Bank {
    private accounts: UserAccount[];
    private fileManager: FileManager;
  
    constructor(accounts: UserAccount[], fileManager: FileManager) {
      this.accounts = accounts;
      this.fileManager = new FileManager("accounts.json")
    }

    public getFileManager(): FileManager {
        return this.fileManager
    }

    public getAccounts(): UserAccount[] {
        return this.accounts;
    }

    public setAccounts(accounts: UserAccount[]){
        this.accounts = accounts;
    }
  
  }

  const newBank: Bank = new Bank(fileManager.readFromJson(), fileManager)

  const createAccount = (name: string, cpf: string, age: number, balance: number = 0): void => {
      const arrayAccounts: UserAccount[] = newBank.getAccounts()
        const newAccount: UserAccount = {
            name,
            cpf,
            age,
            balance,
            transactions: []
        }
        arrayAccounts.push(newAccount)

        newBank.setAccounts(arrayAccounts);

        console.log("Conta criada")
  }

  createAccount(process.argv[2], process.argv[3], Number(process.argv[4]));

  console.log(newBank);

