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