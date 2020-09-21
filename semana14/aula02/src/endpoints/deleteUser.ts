import { Request, Response} from 'express';
import { BaseDatabase } from '../data/BaseDatabase';
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
    await BaseDatabase.destroyConnection()
}