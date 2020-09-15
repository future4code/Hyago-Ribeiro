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
        const token = authenticator.generateToken({id: user.id});

        res.status(200).send({
            token
        });

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}