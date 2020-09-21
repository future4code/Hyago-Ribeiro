### Exercício 1
a) Round e salt são informações que determinam quanto tempo durara a operação da senha. Utilizei um tempo de 12, para dar um tempo e ser seguro para não ser bombardeado de tentativa de usuários mal intensionados.
b)c)
```
export class HashManager {
    public async hash(s: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        return result;
    }

    public async compare(s: string, hash: string): Promise<boolean> {
        return bcrypt.compare(s, hash);
    }
}
```

###Exercício 2
a) O login, porque preciso que a senha entre criptografada, para depois solicitar ela no login e comparar.
b) 
```
import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import {IdGenerator} from '../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';



export const signup = async (req: Request, res: Response) => {
    try {
  
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
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

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password);
  
      const userDatabase = new UserDatabase();
      await userDatabase.createUser(
        id,
        userData.name,
        userData.email,
        hashPassword,
        userData.role
      );

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({
        id,
        role: userData.role
      });
  
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

c)
```
import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';

export const getByEmail = async (req: Request, res: Response) => {
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email inválido");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserByEmail(userData.email);

        const hashManager = new HashManager();
        const compareResult = await hashManager.compare(
            userData.password,
            user.password
        );

        if(!compareResult) {
            throw new Error("Senha inválida");
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        });

        res.status(200).send({
            token
        });

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}
```

c) Não precisamos alterar no momento, pois ele necessita apenas do token.

###Exercício 3
a)`ALTER TABLE User ADD COLUMN role VARCHAR(255) DEFAULT "NORMAL";`
b)
```
import * as jwt from 'jsonwebtoken';
import { USER_ROLES } from '../data/UserDatabase';

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
            id: data.id,
            role: data.role
        }
    }
}

export interface AuthenticationData {
    id: string;
    role: USER_ROLES;
  }
```
c)
```
import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import {IdGenerator} from '../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';



export const signup = async (req: Request, res: Response) => {
    try {
  
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
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

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password);
  
      const userDatabase = new UserDatabase();
      await userDatabase.createUser(
        id,
        userData.name,
        userData.email,
        hashPassword,
        userData.role
      );

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({
        id,
        role: userData.role
      });
  
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
d)
```
import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';

export const getByEmail = async (req: Request, res: Response) => {
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email inválido");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserByEmail(userData.email);

        const hashManager = new HashManager();
        const compareResult = await hashManager.compare(
            userData.password,
            user.password
        );

        if(!compareResult) {
            throw new Error("Senha inválida");
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        });

        res.status(200).send({
            token
        });

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}
```

###Exercício 4
a)
```
import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';

export const getDataUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        if(authenticationData.role !== "ADMIN") {
            throw new Error("Você não tem autorização.")
        }

        const userDb = new UserDatabase();
        const user = await userDb.getUserById(authenticationData.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
}
```

###Exercício 5
```
import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        if(authenticationData.role !== "ADMIN") {
            throw new Error("Você não tem autorização");
        }

        const id = req.params.id;

        const userDatabase = new UserDatabase();
        await userDatabase.deleteUser(id);

        res.sendStatus(200);
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}
```

###Exercício 6
```
import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';

export const getUserGeral = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        authenticator.getData(token);

        const id = req.params.id;

        const userDb = new UserDatabase();
        const user = await userDb.getUserById(id);
        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(400).send({message: error.message});
    }
}
```
### Exercício 7
a)
```
import knex from "knex";
import Knex from "knex";

export abstract class BaseDatabase {
    private static connection: Knex | null = null;

    protected getConnection(): Knex {
        if(BaseDatabase.connection === null) {
            BaseDatabase.connection = knex ({
                client: "mysql",
                connection: {
                host: process.env.DB_HOST,
                port: 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            },
            });
        }
        return BaseDatabase.connection;
    }

    public static async destroyConnection(): Promise<void> {
        if(BaseDatabase.connection) {
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null;
        }
    }
    

}
```
b)
```
import { Request, Response} from 'express';
import { BaseDatabase } from '../data/BaseDatabase';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';

export const getUserGeral = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        authenticator.getData(token);

        const id = req.params.id;

        const userDb = new UserDatabase();
        const user = await userDb.getUserById(id);
        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(400).send({message: error.message});
    }
    await BaseDatabase.destroyConnection()
}
```