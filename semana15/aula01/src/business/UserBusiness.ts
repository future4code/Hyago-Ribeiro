import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';
import {UserDatabase, USER_ROLES} from './../data/UserDatabase';

export class UserBusiness {
    public async signUp(
            name: string,
            email: string,
            password: string,
            role: USER_ROLES
        ): Promise<string> {
            
            if(!name || !email || !password) {
                throw new Error("Preencha os dados corretamente");
            }

            if(password.length < 6) {
                throw new Error("A senha precisa ter no mínimo 6 caracteres!");
            }

            if(email.indexOf('@') === -1){
                throw new Error("E-mail inválido!");
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const hashManager = new HashManager();
            const newPassword = await hashManager.hash(password);
            
            
            const userDatabase = new UserDatabase();
            await userDatabase.createUser(
                id,
                name,
                email,
                newPassword,
                role
                );
                
            const authenticator = new Authenticator();
            const token = authenticator.generateToken({
                id,
                role
            });
            
            return token;
        }

    public async login(email: string, password: string): Promise<string> {
            if(!email || email.indexOf('@') === -1) {
                throw new Error("E-mail incorreto");
            } 

            if(!password) {
                throw new Error("Preencha a senha");
            }

            const userDatabase = new UserDatabase();
            const user = await userDatabase.getUserByEmail(email);

            const hashManager = new HashManager();
            const compareResult = await hashManager.compare(
                password,
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

            return token
    }

    public async getAllUsers(token: string): Promise<any[]> {
            const authenticator = new Authenticator();
            authenticator.getData(token);

            const userDatabase = new UserDatabase();
            
            return  await userDatabase.getAllUsers();
    }

    public async deleteUsers(token: string, id: string): Promise<void> {
            const authenticator = new Authenticator();
            const user = authenticator.getData(token);

            if(user.role !== "ADMIN") {
                throw new Error("Apenas Admins podem executar essa operação!");
            }

            const userDatabase = new UserDatabase();
            await userDatabase.deleteUser(id);
    }
}