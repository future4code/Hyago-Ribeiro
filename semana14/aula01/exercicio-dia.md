### Exercício 1
a) Concordo que string para ids são melhores que números, pelo simples fato de aumentar absurdamente a possibilidade de combinações.
b) 
```
import {v4} from 'uuid';

export class IdGenerator {
    public generate(): string {
        return v4();
    }
}
```

### Exercício 2
a)
```
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

Primeiro estamos colocando o nome da nossa tabela em uma constante, para depois atribuir em outra constante a conexão do nosso servidor via knex, com tudo isso feito, podemos criar uma função de criar noso usuário, porque temos uma variável que representa a conexão, connection, e uma que informa onde vamos inserir o usuário, na tabela userTableName.

b)
```
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c)
```
import knex from 'knex';

export class UserDatabase {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME
        },
    });

    private static TABLE_NAME = "User";

    public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await this.connection
                .insert({
                    id,
                    email,
                    password
                })
                .into(UserDatabase.TABLE_NAME);
    }
}
```

d)
```
import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import {IdGenerator} from '../services/IdGenerator';



export const signup = async (req: Request, res: Response) => {
    try {
  
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
  
      if(!userData.name || !userData.password || !userData.email) {
        throw new Error('Insira todas as informações necessárias para o cadastro')
      }
  
      if(userData.email.indexOf('@') === -1) {
        throw new Error('Email inválido')
      }
  
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();
  
      const userDatabase = new UserDatabase();
      await userDatabase.createUser(
        id,
        userData.name,
        userData.email,
        userData.password
      );
  
      res.status(200).send({
        message: 'Usuário criado com sucesso'
      })
  
    } catch(e) {
      res.status(400).send({
        message: e.message
      })
    }
  }

app.post('/user/signup', signup);
```

### Exercício 3
a) Utilizamos ela para informar que a key que utilizamos do env é uma string.
b)
```
import * as jwt from 'jsonwebtoken';

export class Authenticator {

    public generateToken(data: AuthenticationData):string {
        return jwt.sign(
            data,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.EXPIRES_IN as string}
        )
    }

    public getData(token: string): AuthenticationData {
        const data = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any
        return {
            id: data.id
        }
    }
}

export interface AuthenticationData {
    id: string;
  }
```

### Exercício 4
a)/b)/c)
```
import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import {IdGenerator} from '../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';



export const signup = async (req: Request, res: Response) => {
    try {
  
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
  
      if(!userData.name || !userData.password || !userData.email) {
        throw new Error('Insira todas as informações necessárias para o cadastro')
      }
  
      if(userData.email.indexOf('@') === -1) {
        throw new Error('Email inválido')
      }

      if(userData.password.length < 6) {
        throw new Error('A senha precisa ter mais de 6 caracteres.')
      }
  
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();
  
      const userDatabase = new UserDatabase();
      await userDatabase.createUser(
        id,
        userData.name,
        userData.email,
        userData.password
      );

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({id});
  
      res.status(200).send({
        message: 'Usuário criado com sucesso',
        token
      })
  
    } catch(e) {
      res.status(400).send({
        message: e.message
      })
    }
  }
```

### Exercício 5 
a)
```

export class UserDatabase {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },
    });

    private static TABLE_NAME = "User";

    public async createUser(
        id: string,
        name: string,
        email: string,
        password: string
    ): Promise<void> {
        await this.connection
                .insert({
                    id,
                    name,
                    email,
                    password
                })
                .into(UserDatabase.TABLE_NAME);
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.connection
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({email});
            return result[0];
    }
};
```
b)